import { styles } from "./styles";
import React, { useState } from "react";
import { Button, TextInput, View, Image } from "react-native";
import Texto from "../../components/Texto";

export default function Login({ navigation }) {
  const [nome, setNome] = useState(null);
  const [senha, setsenha] = useState(null);

  const handleClick = () => {
    if (nome === null || senha === null) {
      alert("Erro! Nome/Senha não preenchidos!");
      return;
    } else if (nome === "admin" || senha === "admin") {
      navigation.navigate("Home");
      alert("Login efetuado!");
    } else {
      alert("Erro! Nome/Senha incorretos, digite novamente!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgPrinc}>
        <Image
          source={require("../../../assets/icon-login.png")}
          style={{ width: 35, height: 35, paddingBottom: 5 }}
          resizeMode='contain'
        />
      </View>
      <TextInput
        style={{ width: "80%", borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder='Digite seu Nome'
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={{ width: "80%", borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder='Digite sua senha'
        value={senha}
        onChangeText={setsenha}
      />
      <View style={styles.btnEntrar}>
        <Button title='Entrar' onPress={handleClick} />
        <Texto style={{textAlign:'center'}}>Não tem cadastro?</Texto>
        <Button title='Cadastrar' onPress={() => navigation.navigate('CadastroUsuario')}></Button>
      </View>
    </View>
  );
}
