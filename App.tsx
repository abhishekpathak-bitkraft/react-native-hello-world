import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DimentionAPI from './components/DimentionAPI';

export class App extends Component {
  render() {
    return (
      <View>
        {/* <Component1 /> */}
        {/* <Layouts /> */}
        <DimentionAPI />
      </View>
    );
  }
}

const Component1 = () => {
  return (
    <View
      style={[
        styles.viewStyle,
        styles.commonStyle,
        styles.boxShadow,
        styles.androidShadow,
      ]}>
      <Text style={[styles.textStyle, styles.commonStyle]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, maxime!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#ff0000',
    backgroundColor: '#ffaa00',
    padding: 10,
    margin: 20,
    borderRadius: 6,
  },
  textStyle: {
    color: '#ffffff',
  },
  commonStyle: {},
  // Works only for ios
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  // for android
  androidShadow: {
    elevation: 10,
  },
});

export default App;
