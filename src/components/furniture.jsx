import React from "react";
import Cards from "./cards";
import furnitureData from "../datas/furnitureData";

function Furniture() {
    const imgs = [
        furnitureData[0].image,
        furnitureData[1].image,
        furnitureData[2].image,
        furnitureData[3].image,
        furnitureData[4].image,
        furnitureData[5].image,
        furnitureData[6].image,
        furnitureData[7].image,
    ];

    const name = [
        furnitureData[0].name,
        furnitureData[1].name,
        furnitureData[2].name,
        furnitureData[3].name,
        furnitureData[4].name,
        furnitureData[5].name,
        furnitureData[6].name,
        furnitureData[7].name,
    ];

    const price = [
        furnitureData[0].price,
        furnitureData[1].price,
        furnitureData[2].price,
        furnitureData[3].price,
        furnitureData[4].price,
        furnitureData[5].price,
        furnitureData[6].price,
        furnitureData[7].price,
    ];
    return (
        <div className="collections">
            <h1 style={{textAlign:"center"}}>our Furniture</h1>

            <div id="bottom2">
                <div className="grid-container" id="cardSide">
                    <div className="grid-item">
                        <Cards image={imgs[0]} name={name[0]} quantity={price[0]} />
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[1]} name={name[1]} quantity={price[1]} />
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[2]} name={name[2]} quantity={price[2]} />
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[3]} name={name[3]} quantity={price[3]} />
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[4]} name={name[4]} quantity={price[4]} />
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[5]} name={name[5]} quantity={price[5]} />
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[6]} name={name[6]} quantity={price[6]} />
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[7]} name={name[7]} quantity={price[7]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Furniture;