import React from 'react';
import logo from '../assets/img/logo.png';

function Nav(){
    document.title="BlueCar";
    return(
        <div id="nav"><div id="a1"></div>
        <img className="logo" src={logo} />
    	<div className="item item-1"><a href="#a1">Home</a></div>
        <div className="item item-2"><a href="#b2">Empresa</a></div>
        <div className="item item-3"><a href="#c3">Ubicacion</a></div>
    	
        </div>
    )
}

export default Nav;