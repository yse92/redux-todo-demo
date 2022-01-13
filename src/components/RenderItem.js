import React from 'react';
import Item from './Item';

const renderItem = ({ item, index, update }) => {
    console.log(update)
    return (
    <Item item={item.item} id={item.index+1} update={update}/>
)};

export default renderItem;
