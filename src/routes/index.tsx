import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedComponent from '../pages/Feed';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import logo from '../assets/images/instagram.png';
import { Image, View } from 'react-native';

const Stack = createStackNavigator();

const CameraIcon = () => {
  const selectImageHandler = async () => {};

  return <Icons name="camera" size={30} onPress={selectImageHandler} />;
};

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      }}>
      <Stack.Screen
        name="stack_feed"
        component={FeedComponent}
        options={{
          title: <Image source={logo} />, // es-lint-ignore
          headerLeft: () => <CameraIcon />,
          headerLeftContainerStyle: {
            marginLeft: 5,
          },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
