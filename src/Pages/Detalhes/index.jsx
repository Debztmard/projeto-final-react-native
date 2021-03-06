import React from "react";
import { View, Image, Button, TextInput} from "react-native";
import { styles } from "./styles";
import Texto from "../../components/Texto";

export default function Detalhes({ navigation, route }) {
  const { nome, descricao, preco, uri } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.fxImg}>
        <Image style={styles.img} source={{ uri }} />
      </View>
      <View style={styles.fxTexto}>
        <Texto style={styles.nome}>{nome}</Texto>
        <Texto style={styles.preco}>R$ {preco}</Texto>
        <Texto style={styles.descricao}>{descricao}</Texto>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Texto style={styles.quant}>Quantidade -</Texto>
          <TextInput style={styles.input} keyboardType="numeric" />
          <Texto style={styles.quant}>+</Texto>
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="COMPRAR"
            color="#131418"
            onPress={() => navigation.navigate("Carrinho")}
          />
        </View>
      </View>
    </View>
  );
}
