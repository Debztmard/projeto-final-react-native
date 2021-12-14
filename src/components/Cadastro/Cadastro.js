import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import Cadastro from "../../model/cadastro";
import Texto from "../Texto"
import {
  createTable,
  createCadastro,
  getAllCadastro,
  deleteAllCadastro,
} from "./src/repository/cadastroRepository";
import { styles } from "./styles";

export default function Usuario() {
  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);
  //const [listaCarrinho, setListaCarrinho] = useState([]);

  useEffect(async () => {
    createTable();
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
    deleteAllCadastro();
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
      <Button title="Excluir conta" onPress={handleDelete} />
      <Texto>Excluir conta</Texto>
      <Button title="Criar conta" onPress={handleClick} />
      {/* <Texto>Carrinho</Texto>
      {listaCarrinho.map((carrinho) => {
        return (
          <View key={carrinho.id}>
            <Texto>Produto: {carrinho.nome}</Texto>
            <Texto>Quantidade: {carrinho.quantidade}</Texto>
            <Texto>Valor: {carrinho.totalItem}</Texto>
            <Texto>Total: {carrinho.totalPedido}</Texto>
          </View>
        );
      })} */}
    </View>
  );
}



