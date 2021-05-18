import React, {useState} from 'react';
// import Cards from '../components/Cards-bkfst'
import Item from './ItemOrder';
import '../styles/table.css'


const TableOrders = (props) => {
    
    return (
        <div>
            <div className='table'>
                <div >
                    <label>Cliente:</label>
                    <input 
                    type= 'text'
                    />
                </div>
                <div>
                    <h6>Producto:</h6>
                    {props.order.items.map(item => <Item item ={item}/>
                         )}
                    <p>{props.price}</p>
                    {/* <p>{props.total}</p> */}
                </div>
            </div>
        </div>
    )
};
export default TableOrders;