import { StatusBar } from 'expo-status-bar';
import React from 'react';
import{createAppContainer }from 'react-navigation';
import{createBottomTabNavigator}from 'react-navigation-tabs'
import TransactionScreen from './TransactionScreen'
import SearchScreen from './SearchScreen'
import { StyleSheet, Text, View } from 'react-native';
export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
}}
 const TabNavigator = createBottomTabNavigator({
   Transaction:{screen:TransactionScreen},
   Search:{screen:SearchScreen}
 },
{
defaultNavigationOptions : ({navigation})=>({
  tabBarIcon :({})=> {
    const routeName = navigation.state.routeName 
    if(routeName==='Transaction'){
      return (
        <Image source= {require('./assets/book.png')}
        style = {{width:40, height:40 }}
        > </Image>
        )

    }
    else if(routeName==='Search'){
      return (
        <Image source= {require('./assets/searchingbook.png')}
        style = {{width:40, height:40 }}
        > </Image>
        )
      }
    }
  })
})
const AppContainer = createAppContainer(TabNavigator);