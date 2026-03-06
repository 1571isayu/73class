//匯入模組 import{??} from ??
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//渲染畫面 app(){ return( 文字 like body <div> <p> <div>) } =>範本
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>111319003</Text>
        <Text style={styles.subtitle}>
        游苡婕    
        </Text>
      </View>
    </View>
  );
}
/* 格式設定 const style = StyleSheet 模組.create({
container ;{}
(因為 container 在 stylesheet底下 所以 style.title)
<View style = {styles.container}必須包起來>

main:{} title;{} subtitle:{}

以此類推
}) =>格式設定*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});

/*
import 元件 from '元件檔案區域'
引用的元件像是View Text (像變數) 但他是<元件>

export default function app; 一定要 export

*/

/*
不一樣
background-color => backgroundColor = '#fff'

要渲染文字的話要<Text> 不可以只是View

相同文件必須包在一個標籤裡面!!!!!!!!
<View>
  <Text>Hello</Text> 文字要在<text>裡面=><p h1 -h6> 都會變行
  <Text>World</Text>
</View>

return(); 變成函數

function(){
let a = "hello";
return(
<Text>{a}</Text> //要用{}包起來
);
}

flexDirection:flex;

<Image> 
<Image sourse = {require('./檔案位置')}> 這個居多

<Image sourse ={{uri: '網址'}}
    style = {{width: 200, height:200 }}比較不會用這個 因為是撈網路的
/>
*/

/*





*/