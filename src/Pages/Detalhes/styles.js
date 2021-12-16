import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 10,
  },
  fxImg: {
    flex:1,
    width: '100%',
  },
  img: {
    height: '100%',
    width: '100%',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  fxTexto:{
    flex:1,
  },
  nome: {
    fontWeight: "bold",
    fontSize: 30,
    padding: 10,
  },
  descricao: {
    padding: 10,
    fontSize: 15,
  },
  preco: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 24,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width:40,
  },
  quant: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
});
