import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
// import styles from './styles';



const {width} = Dimensions.get("window");
const height = width * 0.6;

const itens = ['https://images.pexels.com/photos/7957755/pexels-photo-7957755.jpeg?cs=srgb&dl=pexels-tamanna-rumee-7957755.jpg&fm=jpg',
'https://images.pexels.com/photos/7957750/pexels-photo-7957750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
'https://images.pexels.com/photos/7957753/pexels-photo-7957753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]
export default class Slider extends React.Component {

  state = {
    active:0
  }

  change = ({nativeEvent}) => {

    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== this.state.active){
      this.setState({active: slide});
    }
  }
  render() {
  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={this.change}
        showsHorizontalScrollIndicator={false}
        style={{width, height}}
      >
        {
          itens.map((item, index) => (
            <Image
            key={index}
            source={{uri: item}}
            style={{width, height, resizeMode:'cover'}}
            />
          
            ))
        }
      </ScrollView>
      <View style={styles.marcador}>
      {
          itens.map((i, k) => (
        <Text key={k} style={k==this.state.active ? styles.textMarcadorActive : styles.textMarcador}>⬤</Text>
          ))
  }
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
    container: {
     width:null,
     height:null,
    },
    marcador: {
      flexDirection:'row',
      position:'absolute',
      marginTop: 200,
      alignSelf:'center',
    },
    textMarcador:{
      color:'gray',
      margin:3,
    },
    textMarcadorActive:{
      color:'white',
      margin:3,
    }
  });
