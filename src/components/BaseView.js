import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Button, FlatList} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import {add, edit} from '../reducers/actions';
import RenderItem from './RenderItem'
//import { v4 as uuidv4 } from 'uuid'; //???
//import Icon from 'react-native-vector-icons/dist/FontAwesome'; //???
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
//import Reducer from './Reducer'
//{title: ‘’, checkbox: false}

const BaseView = () => {

    const [text, setText] = React.useState("");

    const todosArr = useSelector((state) => state.todolist)
    const update = (val) => {
        dispatch(edit(val));
    };
    const dispatch = useDispatch();

    const onTextAdd = () => dispatch(add(text))

    return (<View>
                <TextInput style={styles.input}
                           onChangeText={setText}
                           value={text}>
                </TextInput>
                <Button
                    onPress={onTextAdd}
                    style={styles.add}
                    title="Add item"
                />
                <FlatList  data={todosArr} renderItem={(item) => <RenderItem update={update} item={item}/>}
                           key={(item) => item.id}>
                </FlatList>
    </View>);
}

const styles = StyleSheet.create({
    container:{
      borderRadius: 10,
    },
    input: {
        height: 40,
        margin: 45,
        borderWidth: 1,
        padding: 10,
    },
    add: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'blue',
        color: "black",
    },
});

export default BaseView;

