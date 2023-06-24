import React from "react";
import mainComponentStyle from './mainComponent.css'
import strength from '../../images/strength.jpg';
import weakness from '../../images/weakness.jpg';
import squad from '../../images/squad.jpg';
import hero from '../../images/hero.jpg';
function MainComponents(){
    return(
        <div className="card bg-dark mx-auto">
            <div className="row text-light">
                <div className="col-6">
                    <a href="#" style={{color:"#fff"}}>
                        <img src={strength} className="card-img-top" alt="Strength" />
                        <p className="card-title ">Strength</p>
                    </a>                   
                </div>
                <div className="col-6">
                    <a href="#" style={{color:"#fff"}}>
                        <img src={weakness} className="card-img-top" alt="Weakness"/>
                        <p className="card-title ">Weakness</p>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <a href="#" style={{color:"#fff"}}>
                        <img src={squad} className="card-img-top" alt="Squad"/>
                        <p className="card-title ">Squad</p>
                    </a>
                </div>
                <div className="col-6">
                    <a href="#" style={{color:"#fff"}}>
                        <img src={hero} className="card-img-top" alt="Hero"/>
                        <p className="card-title ">Hero</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MainComponents;