import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginVertical: 30
  },
  produtoContainer: {
    flex: 2,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  imgProduto: {
    width: 300,
    height: 300,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  nome: {
    fontWeight: "bold",
    fontSize: 22,
    padding: 5,
  },
  preco: {
    padding: 5,
    fontWeight: "bold",
    fontSize: 17,
  },
});
