import React from 'react';
import RootTabs from './navigation/RootTabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <RootTabs />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
