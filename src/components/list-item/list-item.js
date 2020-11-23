import React from 'react';
import './list-item.scss';

const ListItem = ({item}) => {
    const {brigade_name, connection_state, department = {}, position = {}} = item;
    return (
        <li className="list_item">
            <div>{brigade_name}</div>
            <div>Состояние связи - {connection_state}</div>
            <div>{department.name}</div>
            <div>{position.field}</div>
        </li>       
    )
}

export default ListItem;