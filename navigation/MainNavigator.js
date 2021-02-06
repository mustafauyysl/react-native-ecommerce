import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import CategoryDetailScreen from '../screens/Categories/CategoryDetailScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import LoginScreen from '../screens/Profile/LoginScreen';
import RegisterScreen from '../screens/Profile/RegisterScreen';
import CartScreen from '../screens/Cart/CartScreen';
import WishlistScreen from '../screens/Profile/WishlistScreen';

import Icon from 'react-native-vector-icons/Feather';
import Colors from '../constants/colors';

const BottomTabNavigator = createBottomTabNavigator();
const MainStackNavigator = createStackNavigator();
const CategoryStackNavigator = createStackNavigator();
const ProfileStackNavigator = createStackNavigator();

Icon.loadFont();

const CategoryStack = (props) => {
  return (
    <CategoryStackNavigator.Navigator>
      <CategoryStackNavigator.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: false,
        }}></CategoryStackNavigator.Screen>
      <CategoryStackNavigator.Screen
        name="CategoryDetail"
        component={CategoryDetailScreen}
        options={{
          headerShown: false,
        }}></CategoryStackNavigator.Screen>
    </CategoryStackNavigator.Navigator>
  );
};

const ProfileStack = (props) => {
  return (
    <ProfileStackNavigator.Navigator>
      <ProfileStackNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}></ProfileStackNavigator.Screen>
      <ProfileStackNavigator.Screen
        name="WishList"
        component={WishlistScreen}
        options={{
          headerShown: false,
        }}></ProfileStackNavigator.Screen>
      <ProfileStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}></ProfileStackNavigator.Screen>
      <ProfileStackNavigator.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}></ProfileStackNavigator.Screen>
    </ProfileStackNavigator.Navigator>
  );
};

const MainBottomTabNavigator = (props) => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Categories':
              iconName = 'grid';
              break;
            case 'Search':
              iconName = 'search';
              break;
            case 'Profile':
              iconName = 'user';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <BottomTabNavigator.Screen
        name="Home"
        component={HomeScreen}></BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen
        name="Categories"
        component={CategoryStack}></BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen
        name="Search"
        component={SearchScreen}></BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen
        name="Profile"
        component={ProfileStack}></BottomTabNavigator.Screen>
    </BottomTabNavigator.Navigator>
  );
};

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      <MainStackNavigator.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}>
        <MainStackNavigator.Screen
          name="BottomTabNavigator"
          component={MainBottomTabNavigator}
          options={{
            headerShown: false,
          }}></MainStackNavigator.Screen>
        <MainStackNavigator.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: false,
          }}></MainStackNavigator.Screen>
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
