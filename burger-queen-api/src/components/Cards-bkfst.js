import React, { useState, useEffect} from 'react';
import '../styles/cards-bkfst.css'
//import { useParams } from 'react-router-dom'
import Product from '../components/Products';
import TableOrders from '../components/Table';

function Cards(props){
    const handleAddItem = (item) => {
        props.setOrder({...props.order, items:[...props.order.items, item]})
    }

    
    
    const url = 'http://localhost:3001/breakfasts'
    const [breakfasts, setBreakfasts] = useState()
    const fetchApi = async() => {
        const response = await fetch(url)
        //console.log(response.statusText)
        const data = await response.json()
        setBreakfasts(data)
        //console.log(data)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return(
        <div className='container'>
            <div className='order'>
                <TableOrders order = {props.order}/>
            </div>
        <div className='container-card' >
               <div> {! breakfasts ? 'cargando...'
                :breakfasts.map((item => <Product item ={item}  key = {item.id} handleAddItem ={handleAddItem}/>) 
                )}
                </div>
        </div>
        </div>
    );
}

export default Cards


// import React, { useState, useEffect} from 'react';
// import '../styles/cards-bkfst.css'


// function Cards(props){
//     const handleAddItem = (item) => {
//         props.setOrder({...props.order, items:[...props.order.items, item]})
//     }
    
//     const url = 'http://localhost:3001/breakfasts'
//     const [breakfasts, setBreakfasts] = useState()
//     const fetchApi = async() => {
//         const response = await fetch(url)
//         const data = await response.json()
//         setBreakfasts(data)
//             }
//     useEffect(() => {
//         fetchApi()
//     }, [])
//     return(
//         <div className='container-card' >
//                 {! breakfasts ? 'cargando...'
//                 :breakfasts.map((breakfast, index) =>{
//                     return <div key = {index} className = "item" handleAddItem = {handleAddItem}>
//                         <button className= "btn-img" onClick={()=>{(props.handleAddItem(props.item))}}>< img className ="breakfasts-img" src = {breakfast.image} alt = "imagen"/></button>
//                         <br/>
//                         {breakfast.item}
//                         <br/>
//                         ${breakfast.price}
//                     </div>
//                 })
//                 }
           
//         </div>
//     );
// }

// export default Cards