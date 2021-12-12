import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, Image, Animated, Text, TextInput } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function Header() {

  
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <View> 
     <Animated.View 
     style={[
       styles.header,
       {
         height: 85,
         alignItems: "flex-end",
         paddingBottom:10,
       }
      ]}
     >
        
      
      <Animated.Image
      source={require('../../assets/logo.png')}
      style={{
        width: scrollY.interpolate({
          inputRange:[0, 120],
          outputRange:[230, 90],
          extrapolate: 'clamp'
        }),
        height: 40
      }}
      resizeMode="contain"
      />
      <Image
      source={require("../../assets/icon-login.png")}
      style={{width: 35, height: 35, paddingBottom:5}}
      resizeMode="contain"
      />
     </Animated.View>

     <View style={styles.pesquisa}>
     <Image
      source={require("../../assets/icon-lupa.png")}
      style={{width: 55, height: 55, marginBottom:10}}
      resizeMode="contain"
      />

     <TextInput
    style={{ width: "80%", borderWidth: 1, padding: 10, marginBottom: 10 }}
    placeholder="Pesquise aqui seus produtos..."
    //value={produto}
    //onChangeText={setProduto}
    
  /></View>

  </View>
  )
}
const styles = StyleSheet.create({
    header:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 10,
      paddingLeft: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#FFF',
    },
    pesquisa:{
        flexDirection: 'row',  
    }
  });