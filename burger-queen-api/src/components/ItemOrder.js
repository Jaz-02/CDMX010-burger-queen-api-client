import React from 'react';

function ItemOrder(props){
    return (
        <div>
             {props.item.name}
        <div>
        {props.item.price}
        </div>
        </div>

    );
}

export default ItemOrder;