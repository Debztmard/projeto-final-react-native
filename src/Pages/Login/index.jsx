import { styles } from "./styles";
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";


export default function Login({ navigation }) {
  const [nome, setNome] = useState(null);
  const [senha, setsenha] = useState(null);

  
 const handleClick = () => {
    if (nome === null || senha === null) return;

  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: "80%", borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={{ width: "80%", borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setsenha}
      />
      <Button title="Entrar" onPress={handleClick} />
    </View>
  );
}
