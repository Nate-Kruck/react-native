import React from 'react';
import RootTabs from './navigation/RootTabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <RootTabs />
    </SafeAreaProvider>
  );
}
