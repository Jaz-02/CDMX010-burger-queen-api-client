import React, { useState, useEffect} from 'react';
import '../styles/cards.css'

function Cards(){
    const url = 'http://localhost:3001/breakfasts'
    const [breakfasts, setBreakfasts] = useState()
    const fetchApi = async() => {
        const response = await fetch(url)
        console.log(response.statusText)
        const data = await response.json()
        setBreakfasts(data)
        console.log(data)

    }
    useEffect(() => {
        fetchApi()
    }, [])
    return(
        <div >
            <div className = "card">
                {! breakfasts ? 'cargando...'
                :breakfasts.map((breakfast, index) =>{
                    return <div className = "item">
                        {/* <img src = {breakfast.image} alt = "imagen"/> */}
                        {breakfast.item}
                        <br/>
                        {breakfast.price}
                        </div>
                })
                }
            </div>

        </div>
    );
}

export default Cards