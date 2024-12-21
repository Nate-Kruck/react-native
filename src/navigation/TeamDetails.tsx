import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, StyleSheet, Text, View } from "react-native";

type RootStackParamList = {
  TeamDetails: { team: any };
};

type TeamDetailsRouteProp = RouteProp<RootStackParamList, 'TeamDetails'>;

type TeamDetailsProps = {
  route: TeamDetailsRouteProp;
};

export default function TeamDetails() {
  const route = useRoute<TeamDetailsRouteProp>();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'TeamDetails'>>();
  const { team } = route.params;

  return (
    <View style={styles.container}>
      <Text>{team.name}</Text>
      <Button title="Back to Teams" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffc',
    alignItems: 'center',
    justifyContent:'center'
  }
});
