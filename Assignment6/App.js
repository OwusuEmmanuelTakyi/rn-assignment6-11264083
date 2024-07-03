import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import MainStackNavigator from './Apps/Navigations/MainStackNavigator';


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
       
       <MainStackNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

