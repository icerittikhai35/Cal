import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.Boxcal}>

        <View style={styles.Show}>
          <View style={{ height: 150, backgroundColor: '#C3F0EF' }} >
            <TextInput style={styles.text}
              onChangeText={text => onChangeText(text)} value={value} /></View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View>
            <View ><TouchableOpacity style={styles.customBtnNum} onPress={() => { onChangeText(value + '7'); }}>
              <Text style={styles.customBtnText}>7</Text></TouchableOpacity></View>
            <View ><TouchableOpacity style={styles.customBtnNum} onPress={() => { onChangeText(value + '8'); }}>
              <Text style={styles.customBtnText}>8</Text></TouchableOpacity></View>
            <View ><TouchableOpacity style={styles.customBtnNum} onPress={() => { onChangeText(value + '9'); }}>
              <Text style={styles.customBtnText}>9</Text></TouchableOpacity></View>
            <View ><TouchableOpacity style={styles.customBtnBG} onPress={() => { onChangeText('/'); }}>
              <Text style={styles.customBtnText}>/</Text></TouchableOpacity></View>
          </View>
          <View>
            <View ><TouchableOpacity style={styles.customBtnNum} onPress={() => { onChangeText(value + '4'); }}>
              <Text style={styles.customBtnText}>4</Text></TouchableOpacity></View>
            <View ><TouchableOpacity style={styles.customBtnNum} onPress={() => { onChangeText(value + '5'); }}>
              <Text style={styles.customBtnText}>5</Text></TouchableOpacity></View>
            <View ><TouchableOpacity style={styles.customBtnNum} onPress={() => { onChangeText(value + '6'); }}>
              <Text style={styles.customBtnText}>6</Text></TouchableOpacity></View>
            <View ><TouchableOpacity style={styles.customBtnBG} onPress={() => { onChangeText('X'); }}>
              <Text style={styles.customBtnText}>X</Text></TouchableOpacity></View>
          </View>
          <View>
            <View ><TouchableOpacity style={styles.customBtnNum} onPress={() => { onChangeText(value + '1'); }}>
              <Text style={styles.customBtnText}>1</Text></TouchableOpacity></View>
            <View ><TouchableOpacity style={styles.customBtnNum} onPress={() => { onChangeText(value + '2'); }}>
              <Text style={styles.customBtnText}>2</Text></TouchableOpacity></View>
            <View ><TouchableOpacity style={styles.customBtnNum} onPress={() => { onChangeText(value + '3'); }}>
              <Text style={styles.customBtnText}>3</Text></TouchableOpacity></View>
            <View ><TouchableOpacity style={styles.customBtnBG} onPress={() => { onChangeText('-'); }}>
              <Text style={styles.customBtnText}>-</Text></TouchableOpacity></View>
          </View>
          <View>
            <View ><TouchableOpacity style={styles.customBtnBG} onPress={() => { onChangeText('%'); }}>
              <Text style={styles.customBtnText}>%</Text></TouchableOpacity></View>
            <View ><TouchableOpacity style={styles.customBtnNum} onPress={() => { onChangeText(value + '0'); }}>
              <Text style={styles.customBtnText}>0</Text></TouchableOpacity></View>
            <View ><TouchableOpacity style={styles.customBtnEqual} onPress={() => { onChangeText('='); }}>
              <Text style={styles.customBtnText}>=</Text></TouchableOpacity></View>
            <View ><TouchableOpacity style={styles.customBtnBG} onPress={() => { onChangeText('+'); }}>
              <Text style={styles.customBtnText}>+</Text></TouchableOpacity></View>
          </View>
        </View>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Boxcal: {
    flexDirection: 'column',
    backgroundColor: '#C3F0EF'
  },
  text: {
    color: '#111111',
    fontSize: 100,
    textAlign: "right",
    textAlignVertical: "center"
  },
  Show: {
    flexDirection: 'column',
    flex: 1,

  },
  customBtnText: {
    textAlign: 'center',
    padding: 20,
    fontSize: 60,
    fontWeight: '400',
    color: "#fff",
  },
  customBtnBG: {
    backgroundColor: "#007aff",
    width: 100,
    height: 100,
    borderRadius: 5
  },
  customBtnNum: {
    backgroundColor: "#73C6B6",
    width: 100,
    height: 100,
    borderRadius: 5
  },
  customBtnEqual: {
    backgroundColor: "#EC7063",
    width: 100,
    height: 100,
    borderRadius: 5
  },
});
