import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import ProfileOptionContainer from '../../components/ProfileOptionContainer';

const options = [
  {id: 1, name: 'WishList'},
  {id: 2, name: 'Login'},
  {id: 3, name: 'Register'},
  {id: 4, name: 'About us'},
];

class ProfileScreen extends Component {
  renderItem = (item) => {
    return (
      <ProfileOptionContainer
        text={item.name}
        onPress={() => this.props.navigation.navigate(item.name)}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Profile" />
        <View style={styles.headerContainer}>
          <Image
            style={styles.img}
            source={require('../../assets/img/profile.png')}
          />
          <Text style={styles.name}>Guest</Text>
        </View>
        <View style={styles.optionsContainer}>
          <FlatList
            scrollEnabled={false}
            data={options}
            keyExtractor={(item) => item.id}
            renderItem={(item) => this.renderItem(item.item)}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    fontFamily: 'Dosis-Bold',
    fontSize: 30,
  },
  img: {
    width: 100,
    height: 100,
  },
  optionsContainer: {
    marginTop: 30,
  },
});

export default ProfileScreen;
