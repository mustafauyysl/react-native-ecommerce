import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';

class SizesContainer extends Component {
  state = {
    selectedSize: 0,
  };

  changeSize = (id) => {
    this.setState({selectedSize: id});
  };

  renderItem = (item, index) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.sizeContainer,
          index === this.state.selectedSize
            ? {backgroundColor: Colors.primaryColor}
            : {backgroundColor: '#E9E9E9'},
        ]}
        onPress={() => this.changeSize(index)}>
        <Text
          style={[
            styles.sizeTitle,
            index === this.state.selectedSize
              ? {color: '#fff'}
              : {color: '#979797'},
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.props.sizes}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({item, index}) => this.renderItem(item, index)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sizeContainer: {
    width: 100,
    height: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  sizeTitle: {
    fontSize: 25,
    color: '#979797',
    fontFamily: 'Dosis-Regular',
  },
});

export default SizesContainer;
