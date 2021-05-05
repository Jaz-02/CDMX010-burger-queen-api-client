import React,{useState} from 'react';
import {BrowserRouter, Switch, Route, /*Link*/} from 'react-router-dom';
import Login from '../pages/Login';
import Orders from '../pages/Orders';


function Routes() {
    const [estaautenticado, setEstaautenticado]=useState(false)

    const handleAutenticate=()=>{
        // esto usara firebase esperacorreo y contraseñà

        setEstaautenticado(true) // sera el resultado de la promesa de firebase
    }
    return(
        <BrowserRouter>
            <Switch>
                {estaautenticado?
                    <Route exact path = "/" component = {Orders}/>:
                    <Route  exact path = "/" component = {()=><Login
                    handleAutenticate={handleAutenticate}
                    />}/>
                }
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;