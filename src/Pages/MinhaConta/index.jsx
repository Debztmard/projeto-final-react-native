import { styles } from "./styles";
import React, { useState } from "react";
import { Button, TextInput, View, Image } from "react-native";
import avatar from "../../../assets/avatar.png";
import Texto from "../../components/Texto";
import { deleteAllCadastro } from "../../repository/cadastroRepository";
import iconLogin from "../../../assets/icon-login.png";

export default function MinhaConta({ navigation }) {
  const handleDelete = () => {
    deleteAllCadastro();
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <View style={styles.fxImg}>
        <Image source={iconLogin} style={styles.avatar} resizeMode='center' />
        <Texto style={styles.texto}>Sua Conta</Texto>
      </View>
      <View style={styles.fxButton}>
        <View style={styles.btnEntrar}>
          <Button
            title='Excluir conta'
            color='#131418'
            onPress={handleDelete}
          />
        </View>
        <View style={styles.btnEntrar}>
          <Button
            title='SAIR'
            color='#131418'
            onPress={() => navigation.popToTop()}
          />
        </View>
      </View>
    </View>
  );
}
