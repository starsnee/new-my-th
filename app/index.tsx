import { Text, View } from "react-native";
import * as React from 'react';
import VaultDoor from '../assets/vault-door.svg'; 

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <VaultDoor width={128} height={128} />
    </View>
  );
}