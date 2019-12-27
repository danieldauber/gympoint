import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';

import Checkin from './pages/Checkin';
import HelpList from './pages/HelpList';
import HelpForm from './pages/HelpForm';
import HelpDetail from './pages/HelpDetail';
import Logo from '~/components/Logo';

export default (signedIn = false) =>
  createAppContainer(
    createStackNavigator(
      {
        SignIn,
        App: createBottomTabNavigator(
          {
            Checkin: {
              screen: createStackNavigator(
                {
                  Checkin,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: false,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                    headerTitle: () => <Logo />,
                  },
                }
              ),
              navigationOptions: {
                header: {
                  style: {
                    elevation: 0, // remove shadow on Android
                    shadowOpacity: 0, // remove shadow on iOS
                  },
                },
                tabBarLabel: 'Check-ins',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="place" size={20} color={tintColor} />
                ),
                tabBarVisible: true,
              },
            },
            Help: {
              screen: createStackNavigator(
                {
                  HelpList,
                  HelpForm,
                  HelpDetail,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: false,
                    headerStyle: {
                      backgroundColor: '#fff',
                    },
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                    headerTintColor: '#ee4e62',
                    headerTitle: () => <Logo />,
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir Ajuda',
                tabBarVisible: true,
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="textsms" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: false,
              activeTintColor: '#ee4e62',
              inactiveTintColor: '#999',
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'SignIn',
        defaultNavigationOptions: {
          headerTransparent: true,
        },
      }
    )
  );
