import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  AboutMe: undefined
}

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'AboutMe'>>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('AboutMe')}>
        About Me
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
