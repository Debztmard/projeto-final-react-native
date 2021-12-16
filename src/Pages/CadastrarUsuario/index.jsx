import { styles } from "./styles";
import React, { useState, useEffect } from "react";
import { Button, TextInput, View, Image } from "react-native";
import {
  createCadastro,
  getAllCadastro,
} from "../../repository/cadastroRepository";
import Ionicons from "react-native-vector-icons/Ionicons";

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
        <Ionicons
          name='person-circle-outline'
          style={styles.searchIcon}
          size={150}
        />
      </View>
      <View style={styles.fxButton}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu Nome'
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
          value={senha}
          onChangeText={setSenha}
        />
        <View style={styles.btnEntrar}>
          <Button
            title='Salvar cadastro'
            color='#131418'
            onPress={seguraClick}
          />
        </View>
      </View>
    </View>
  );
}
