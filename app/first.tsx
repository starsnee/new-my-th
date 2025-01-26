import React from 'react';
import { StyleSheet, Text, Button, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"blue",
    justifyContent: "center",
    alignItems: "center",
  },
    text: {
      fontWeight:'bold',
      color:'white',
    },
    button:{

    },
    title:{
      color:'black',
      fontWeight:'bold',
    },
});

export default function firstPage( {navigation} ) {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to our project:</Text>
      <Text></Text>
      <Button 
        title="Next"
        color="yellow"
        onPress={()=>navigation.navigate('Game')}
      />
    </SafeAreaView>
  );

  
}
