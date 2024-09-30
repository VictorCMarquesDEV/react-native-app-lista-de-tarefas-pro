import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tasks from './src/screens/Tasks';
import Entry from './src/screens/Entry';
import Profile from './src/screens/Profile';
import Menu from './src/screens/Menu';
import Calendar from './src/screens/Calendar';
import Details from './src/screens/Details';
import TaskProvider from './src/context/TaskContext';

//app-lista: Aplicativo de Lista de Tarefas

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <TaskProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Entry' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Entry" component={Entry} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Menu" component={Menu} />
                    <Stack.Screen name="Calendar" component={Calendar} />
                    <Stack.Screen name="Tasks" component={Tasks} />
                    <Stack.Screen name="Details" component={Details} />
                </Stack.Navigator>
            </NavigationContainer>
        </TaskProvider>
    );
}
