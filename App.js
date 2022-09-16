import { View, Text, StyleSheet } from 'react-native'
import {React, useState,useEffect} from 'react'
import { Button } from 'react-native';

const App = () => {
  const [state, setstate] = useState(0);
  useEffect(() => {
    document.title = 'Counter App';
  });
  return (
    <View style={styles.container}>
<Text style={styles.textf}>Counter App</Text>
  
<Text  style={styles.textf}>{state}</Text>
<View style={styles.Button}>
<Button title="increment" onPress={()=>{setstate(state+1)}}/>
<Button title="Decrement" color="#c23616" onPress={()=>{setstate(state-1)}}/>
</View>
    </View>
  )
}

export default App


const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f5f6fa'
  },
  Button:{
    marginTop:20,

  },
textf:{
  fontSize:40,
  marginBottom:20,
  color:'#273c75'
}
})