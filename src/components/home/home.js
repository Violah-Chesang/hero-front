import React from 'react';
import game from '../../images/game.svg';
import css from '../home/home.css'

function Home(){
    const name = "Violah"
    return (
        <div>
            <img src= {game} alt='Game' />
            <p>Welcome to my page</p>
            <p>My name is {name}</p>
        </div>
    );   
    
}
export default Home;