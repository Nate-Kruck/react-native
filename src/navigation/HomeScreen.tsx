import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { fetchNflData } from '../services/Nfl.service';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Card } from '@rneui/themed';

type RootStackParamList = {
  HomeScreen: undefined; // No params for HomeScreen
  TeamDetails: { team: any }; // Adjust `any` to the actual team type if available
};

export default function HomeScreen() {
  const [teams, setTeams] = useState<any[]>([]); // Initialize as empty array
  const [error, setError] = useState<string | null>(null); // Initialize as null
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const getNflTeams = async () => {
      try {
        const data = await fetchNflData();

        if (data && Array.isArray(data)) {
          const teamList = data.map((item) => item.team);
          setTeams(teamList);
        }
      } catch (err) {
        setError('Failed to fetch teams');
      } finally {
        setLoading(false);
      }
    };

    getNflTeams();
  }, [])
  
  const handleTeamClick = (team: any) => {
    navigation.navigate('TeamDetails', { team });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>NFL Teams</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        teams.length ? (
          teams.map((team, index) => (
            <TouchableOpacity key={index} onPress={() => handleTeamClick(team)} style={styles.cardContainer}>
              <Card containerStyle={[styles.card, { backgroundColor: `#${team.color}` }]}>
                <View key={index} style={styles.teamContainer}>
                    {team.logos && team.logos.length > 0 && (
                      <Image source={{ uri: team.logos[0].href }} style={styles.logo} />
                    )}

                    <Button title="Team Site" onPress={() => window.alert('TODO')} titleStyle={{ color: 'black' }} buttonStyle={styles.teamSiteButton} />

                    <Button title="Team Details" onPress={() => handleTeamClick(team)} titleStyle={{ color: 'black' }} buttonStyle={styles.teamSiteButton} />
                </View>
              </Card>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No teams found.</Text>
        )
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 0
  },
  cardContainer: {
    width: '100%',
  },
  card: {
    width: Dimensions.get('window').width -20,
    alignSelf: 'center',
    padding: 16,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 1
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  teamSiteButton: {
    borderRadius: 8,
    backgroundColor: '#ffffff'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#333'
  },
  text: {
    color: '#aaafff'
  }
});
