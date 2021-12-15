import { styles } from "./styles";
import React, { useState, useEffect } from "react";
import { Button, TextInput, View, Image } from "react-native";
import Cadastro from "../../model/cadastro";
import {
  createCadastro,
  getAllCadastro,
} from "../../repository/cadastroRepository";

export default function CadastroUsuario({ navigation, route }) {
  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);
  const { setListaCadastro } = route.params;

  const seguraClick = async () => {
    await createCadastro(usuario, senha);
    setListaCadastro(await getAllCadastro());

    setUsuario(null);
    setSenha(null);

    navigation.goBack();
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
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={{ width: "80%", borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder='Digite sua senha'
        value={senha}
        onChangeText={setSenha}
      />
      <View style={styles.btnEntrar}>
        <Button title='Salvar cadastro' color='#131418' onPress={seguraClick} />
      </View>
    </View>
  );
}
