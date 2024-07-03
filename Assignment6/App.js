import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import MainStackNavigator from './Apps/Navigations/MainStackNavigator';
import HomeScreen from './Apps/Screens/HomeScreen';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
       
       <HomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

