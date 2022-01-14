import React, {Component} from 'react'
import Reducer from './src/reducers/Reducer'
import BaseView from './src/components/BaseView'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SagaView from './src/components/SagaView';

const store = createStore(Reducer)
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Redux ToDo View" component={BaseView} />
                    <Stack.Screen name="SagaView" component={SagaView} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;

