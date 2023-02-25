import React from "react";
import Cards from "./cards";
import projectsData from "../datas/projectsData";
import '../css/colections.scss';


function Collections() {
    const imgs = [
        projectsData[0].image,
        projectsData[1].image,
        projectsData[2].image,
        projectsData[3].image,
        projectsData[4].image,
        projectsData[5].image,
        projectsData[6].image,
        projectsData[7].image,
    ];

    const name = [
        projectsData[0].name,
        projectsData[1].name,
        projectsData[2].name,
        projectsData[3].name,
        projectsData[4].name,
        projectsData[5].name,
        projectsData[6].name,
        projectsData[7].name,
    ];

    const quantity = [
        projectsData[0].quantity,
        projectsData[1].quantity,
        projectsData[2].quantity,
        projectsData[3].quantity,
        projectsData[4].quantity,
        projectsData[5].quantity,
        projectsData[6].quantity,
        projectsData[7].quantity,
    ];
    return (
        <div className="collections">
            <h1 style={{textAlign:"center"}}>our collections</h1>

            <div id="bottom2">
                <div className="grid-container" id="cardSide">
                    <div className="grid-item">
                        <Cards image={imgs[0]} name={name[0]} quantity={quantity[0]} products="products"/>
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[1]} name={name[1]} quantity={quantity[1]} products="products"/>
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[2]} name={name[2]} quantity={quantity[2]} products="products"/>
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[3]} name={name[3]} quantity={quantity[3]} products="products"/>
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[4]} name={name[4]} quantity={quantity[4]} products="products"/>
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[5]} name={name[5]} quantity={quantity[5]} products="products"/>
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[6]} name={name[6]} quantity={quantity[6]} products="products"/>
                    </div>
                    <div className="grid-item">
                        <Cards image={imgs[7]} name={name[7]} quantity={quantity[7]} products="products"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collections;
