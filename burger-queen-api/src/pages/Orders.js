import React, {useState} from 'react';
import Cards from '../components/Cards-bkfst';
//import Lunchcards from '../components/Lunch-cards';
import Options from '../components/Nav-bar';
import TableOrders from '../components/Table';

export default function Orders() {
  const [order, setOrder] = useState({
    client: "",
    items:[],
    total:0,
    status:"pending",
  })
  return (
    <div>
    <Options/>
    
    <Cards setOrder={setOrder} order ={order}/>
    </div>

  );
}



