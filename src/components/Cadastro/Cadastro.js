import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import Cadastro from "../../model/cadastro";
import {
  createCadastro,
  getAllCadastro,
} from "./src/repository/cadastroRepository";
import { styles } from "./styles";

export default function Usuario() {
  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);
  const [listaCadastro, setListaCadastro] = useState([]);

  useEffect(async () => {
    setListaCadastro(await Cadastro.query());
  }, []);

  const handleClick = async () => {
    if (!usuario || !senha) return;

    createCadastro(usuario, senha);

    setListaCadastro(await getAllCadastro());

    setNome(null);
    setCadastro(null);
  };

  const handleDelete = () => {
    setListaCadastro([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome de usuário"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Criar conta" onPress={handleClick} />
    </View>
  );
}



