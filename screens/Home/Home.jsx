import { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// tabs
import PostsTab from '../../tabs/Posts/Posts';
import CreatePostTab from '../../tabs/CreatePost/CreatePost';
import SettingsTab from '../../tabs/Settings/Settings';

const Tab = createMaterialTopTabNavigator();

export default class Home extends Component {
  render() {
    return (
      <>
        <StatusBar
          backgroundColor={'#fff'}
          barStyle='dark-content'
        />
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.headerText}>Techtalk</Text>
            <MaterialIcon
              name='cellphone-message'
              size={35}
              color={'#1d1d1f'}
            />
          </View>
          <TouchableOpacity style={styles.search}>
            <Icon
              name='search'
              size={23}
              color={'#1d1d1f'}
            />
          </TouchableOpacity>
        </View>
        <Tab.Navigator
          screenOptions={{
            animationEnabled: true,
            swipeEnabled: false,
            tabBarShowLabel: false,
            tabBarPressOpacity: 0.1,
            tabBarPressColor: '#dfdfdf',
            tabBarIndicatorStyle: {
              backgroundColor: '#76b698',
              height: 3,
              position: 'absolute',
              bottom: 0,
              zIndex: 999,
            },
            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              width: '100%',
              height: 50,
              paddingTop: 0,
              zIndex: 10,
              borderTopWidth: 1,
              borderColor: 'rgba(0, 0, 0, 0.1)',
              top: -1,
            },
          }}
        >
          <Tab.Screen
            name='Posts'
            component={PostsTab}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.iconContainer}>
                  <Icon
                    name={focused ? 'md-home-sharp' : 'md-home-outline'}
                    size={25}
                    color={focused ? '#76b698' : '#1d1d1f'}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name='CreatePost'
            component={CreatePostTab}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.iconContainer}>
                  <Icon
                    name={focused ? 'create' : 'create-outline'}
                    size={25}
                    color={focused ? '#76b698' : '#1d1d1f'}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name='Settings'
            component={SettingsTab}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.iconContainer}>
                  <Icon
                    name={focused ? 'settings' : 'settings-outline'}
                    size={25}
                    color={focused ? '#76b698' : '#1d1d1f'}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1d1d1f',
    marginRight: 5,
  },
  search: {
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeef',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
});
