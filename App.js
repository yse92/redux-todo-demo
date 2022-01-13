import React, {Component} from 'react'
import Reducer from './src/reducers/Reducer'
import BaseView from './src/components/BaseView'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(Reducer)

const App = () => {
    return (
        <Provider store={store}>
            <BaseView/>
        </Provider>
    );
}

export default App;

