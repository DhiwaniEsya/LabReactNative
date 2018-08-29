/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Nama     : Dhiwani Maharani Aulia Nur Esa\n' +
    'Kelas    : XI RPL 3\n' +
    'No Absen : 13',
  
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
        {instructions}
        </Text>
        <Image
  style={{width: 250, height: 250}}
  source={{uri : 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-1/p240x240/35973336_1868304076803380_8145664682435280896_n.jpg?_nc_cat=0&oh=095387f0c72e8ec2809a7997466ef0ed&oe=5BED0671'}}
/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF99FF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
