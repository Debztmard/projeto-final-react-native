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
  

  // const props = {
  //   usuario: "deborah",
  //   senha: 1234
  // }

  // const novoCadastro = new Cadastro(props);
  // novoCadastro.save();

  // useEffect(async () => {
  //   setListaCadastro(await Cadastro.query());
  // }, []);

  const seguraClick = async () => {
    // if (!usuario || !senha) return;
    await createCadastro(usuario, senha);
    setListaCadastro(await getAllCadastro());

    setUsuario(null);
    setSenha(null);

    navigation.goBack();
  };

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
        <Button title='Salvar cadastro' onPress={seguraClick} />
        {/* <Button title='Ir Login' onPress={() => navigation.navigate('Login')}></Button> */}
      </View>
    </View>
  );
}