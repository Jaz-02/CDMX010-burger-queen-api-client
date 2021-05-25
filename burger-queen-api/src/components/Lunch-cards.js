import React, { useState, useEffect} from 'react';
//import { Card } from 'react-bootstrap';
import '../styles/lunch-cards.css';
import Product from '../components/Products';
import TableOrders from '../components/Table';


function Lunchcards(props){
    const handleAddItem = (item) => {
        props.setOrder({...props.order, items:[...props.order.items, item]})
    }



    const url = 'http://localhost:3001/lunch'
    const [lunchs, setLunchs] = useState()
    const fetchApi = async() => {
        const response = await fetch(url)
        console.log(response.statusText)
        const data = await response.json()
        setLunchs(data)
         console.log(data)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return(
        <div className = 'container'>
            <div className='order'>
                <TableOrders order = {props.order}/>
            </div>
            <div className='container-card' >
               <div> {! lunchs ? 'cargando...'
                :lunchs.map((item => <Product item ={item}  key = {item.id} handleAddItem ={handleAddItem}/>) 
                )}
                </div>
            </div>
        </div>
    );
}


export default Lunchcards

/* import React, { useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import '../styles/cards-bkfst.css';

function Lunchcards(){ 
const url = 'http://localhost:3001/lunch'
const [lunchs, setLunchs] = useState()
const fetchApi = async() => {
const response = await fetch(url)
        console.log(response.statusText)
        const data = await response.json()
        setLunchs(data)
        console.log(data)

    }
useEffect(() => {
        fetchApi()
    }, [])
     return(
     <div className = "card" >
     <Card className = "item" style={{ width: '18rem' }} >
         {! lunchs ? 'cargando...'
         :lunchs.map((lunch, index) =>{
             return <Card.Body key = {index} className = "item">
                 <button className= "btn-img"><Card.Img variant="top" src= {lunch.image} className ="breakfasts-img" /></button>
                 <br/>
                 <br/>
                 <br/>
                 <Card.Text>{lunch.item}</Card.Text>
                 <Card.Text>{lunch.price}</Card.Text>
                 </Card.Body>    
                 })
                 }
                 </Card>
       </div>
     );
 }


 export default Lunchcards  */