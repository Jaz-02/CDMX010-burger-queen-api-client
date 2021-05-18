import React from 'react';
import '../styles/cards-bkfst.css'

function Product(props) {
    const {name, price, image} = props.item;
    return(
        <div className = "item">
            <button className= "btn-img" onClick={()=>{(props.handleAddItem(props.item))}}>< img className ="breakfasts-img" src = {image} alt = "imagen"/></button>
            <br/>
            {name}
            <br/>
            ${price}
        </div>
    )
}

export default Product;