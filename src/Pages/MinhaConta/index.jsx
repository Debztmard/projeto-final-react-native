import { styles } from "./styles";
import React, { useState } from "react";
import { Button, TextInput, View, Image } from "react-native";
import avatar from "../../../assets/avatar.png";
import Texto from "../../components/Texto";
import { deleteAllCadastro } from "../../repository/cadastroRepository";

export default function MinhaConta({ navigation }) {
  // const [nome, setNome] = useState(null);
  // const [senha, setsenha] = useState(null);

  // const handleClick = () => {
  //   if (nome === null || senha === null) {
  //     alert("Erro! Nome/Senha não preenchidos!");
  //     return;
  //   } else if (nome === "admin" || senha === "admin") {
  //     navigation.navigate("Home");
  //     alert("Login efetuado!");
  //   } else {
  //     alert("Erro! Nome/Senha incorretos, digite novamente!");
  //   }
  // };
  const handleDelete = () => {
    deleteAllCadastro();
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={avatar}
          style={styles.avatar}
          resizeMode='center'
        />
        <Texto style={styles.texto} >Fulano de tal</Texto>
      </View>
      <View style={styles.btnEntrar}>
        <Button title='Excluir conta' onPress={handleDelete} />
      </View>
      <View style={styles.btnEntrar}>
        <Button title='SAIR' onPress={()=> navigation.popToTop()} />
      </View>
    </View>
  );
}
  {/* <TextInput
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
      /> */}