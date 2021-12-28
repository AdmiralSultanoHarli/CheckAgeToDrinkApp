import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {Text, View, TextInput, Button, Alert} from 'react-native';
import styles from './styles';

export default function App() {

  const[age, setAge] = useState(0)

  const ageHandler = () => {
    if(age > 21){
      Alert.alert("Yap!!", "You can drink")
    }else{
      Alert.alert("Oops!!", "You can not drink")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}/>
      <TextInput style={styles.input} onChangeText={(text)=>setAge(text)} placeholder="Enter your age" idboardType="numeric"/>
      <TextInput style={styles.input} onChangeText={(text)=>setAge(text)} placeholder="Enter your age" idboardType="numeric" />
      <View style={styles.button_style}>
        <Button title="Can i drink?" onPress={()=>ageHandler()} />
      </View>
    </View>
  );
}

