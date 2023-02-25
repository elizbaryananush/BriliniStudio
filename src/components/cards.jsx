import React from "react";
import '../css/cards.scss';


function Cards({ image, name, quantity , products}) {
    return (
        <div className="cards">
                <img src={image} />
                <h4>{name}</h4>
                <p>{quantity} {products}</p>
            <div>
                <button className="button-28" role="button">More</button>
            </div>
        </div>
    )
}

export default Cards;