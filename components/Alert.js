import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

class Alert extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.alertContainer]}>
          <Text style={styles.alertTitle}>{this.props.title}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -200,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  alertContainer: {
    backgroundColor: '#262626',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  alertTitle: {
    color: '#fff',
    fontFamily: 'Dosis-Bold',
    fontSize: 16,
  },
});

export default Alert;
