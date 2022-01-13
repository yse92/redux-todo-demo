import React, {Component} from 'react';

const initState = {
    todolist: []
}
//{id: 1, title: 'first item'}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default (state=initState , action) => {
        switch (action.type) {
            case "ADD":
                console.log('state', state.todolist);
                console.log('action', action.payload);
                return {...state,
                    todolist: [...state.todolist, { title: action.payload, id: getRndInteger(1, 9e7)}]
                };
            case "DEL":
                const a = state.todolist.filter((item)=> { return item.id!==action.payload });

                console.log('state.todolist',state.todolist)
                console.log('action.payload', action.payload)

                return {...state,
                    todolist: a
                };
            case "EDIT":
                //const a = state.todolist.filter((item)=> { return item.id!==action.payload });

                const b = state.todolist.map(item => {
                    if (item.id === action.payload.id)
                        return  {...item, title: action.payload.title};
                    else
                        return item;
                })
                console.log('reducer - edit - new array ', b)
                console.log('reducer - edit - state.todolist',state.todolist)
                console.log('reducer - edit - action.payload ', action.payload)

                return {...state, todolist: b
                };
            default:
                return state;
        }
}



//Глубокое копирование ?
//React Native Debugger
