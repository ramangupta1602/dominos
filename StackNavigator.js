import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PizzaScreen from './screens/PizzaScreen';
import Pizza from './screens/Pizza';
import CardScreen from './screens/CardScreen';
import OrderData from './screens/OrderData';



function StackNavigator() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="PizzaScreen" component={PizzaScreen} options={{headerShown:false}} />
        <Stack.Screen name="PizzaMania" component={Pizza} options={{headerShown:false}} />
        <Stack.Screen name="Cart" component={CardScreen} />
        <Stack.Screen name="Order" component={OrderData} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;  
