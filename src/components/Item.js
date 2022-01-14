import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {del, edit} from '../reducers/actions';


const Item = ({ id, item, update }) => {
    console.log({item});
    const [editText, setEditText] = React.useState("");
    const [isVisible, setVisibility] = React.useState(false);

    const dispatch = useDispatch()
    const onTextEdit = () => {  console.log('id', item.id, 'editText', editText);
        update({id: item.id, title: editText})
        setVisibility(false);}
    const onTextDelete = () => dispatch(del(item.id))

    const flipVisible = () => {
        setVisibility(!isVisible)
    }

    return(
        <View style={styles.item}>
            <Text style={styles.title}>{id} : {item.title}</Text>
            { isVisible &&
                <TextInput style={styles.input}
                           onChangeText={setEditText}
                           value={editText}/>
            }
            { isVisible &&
                <TouchableOpacity onPress={onTextEdit}>
                    <Text style={styles.edit}>OK</Text>
                </TouchableOpacity>
            }

            <TouchableOpacity onPress={flipVisible}>
                <Text style={styles.edit}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onTextDelete}>
                <Text style={styles.delete}>DEL</Text>
            </TouchableOpacity>
        </View>
    )};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'space-between',
        backgroundColor: '#9cd1d9',
        borderColor: '#5086cb',
        borderWidth: 3,
        borderRadius: 9,
    },
    delete:{
        height: 20,
        fontWeight: '900',
        position: 'relative',
        marginLeft: 10,
        color: '#0b52aa',
        fontSize: 16,
    },
    edit:{
        height: 20,
        fontWeight: '900',
        position: 'relative',
        marginLeft: 10,
        color: 'green',
        fontSize: 16,
    },
    title:{
        width: 150,
    },
    input: {
        height: 20,
        width: 50,
        borderWidth: 1,
    },

});
export default Item;
