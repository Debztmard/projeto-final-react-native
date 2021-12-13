// import React from "react";
// import { View, Image , Button} from "react-native";
// import Texto from "../Texto";
// import { styles } from "./styles";
// import { useNavigation } from "@react-navigation/native";

// export default function Card(props) {
//   const navigation = useNavigation();
//   const { nome, uri, preco } = props;

//   return (
//     <View style={styles.container}>
//       <View style={styles.produtoContainer}>
//         <Image style={styles.imgProduto} source={{ uri: uri }} />
//         <Texto>{nome}</Texto>
//         <Texto>R${preco}</Texto>
//         <Button title= 'Detalhes' onPress={() =>navigation.navigate ('Detalhes')}/>
//       </View>
//     </View>
//   );
// }
// //

import React from "react";
import { View, Image, Button } from "react-native";
import Texto from "../Texto";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
 
export default function Card(props) {
  const { nome, uri, preco } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.produtoContainer}>
        <Image style={styles.imgProduto} source={{ uri: uri }} />
        <Texto>{nome}</Texto>
        <Texto>R${preco}</Texto>
        <Button title="Detalhes" onPress={() => navigation.navigate('Detalhes',{nome:nome})}></Button>
      </View>
    </View>
  )
}
//
