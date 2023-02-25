import '../css/projects.scss';
import React, { useState } from "react";
import projectsData from "../datas/projectsData";
import { Link } from "react-router-dom";
import 'macro-css'

function Projects() {

    let [index, setIndex] = useState(0);

    const id = [
        projectsData[0].id,
        projectsData[1].id,
        projectsData[2].id,
        projectsData[3].id,
        projectsData[4].id,
        projectsData[5].id,
    ];

    const imgs = [
        projectsData[0].image,
        projectsData[1].image,
        projectsData[2].image,
        projectsData[3].image,
        projectsData[4].image,
        projectsData[5].image,
    ];

    const name = [
        projectsData[0].name,
        projectsData[1].name,
        projectsData[2].name,
        projectsData[3].name,
        projectsData[4].name,
        projectsData[5].name,
    ];

    const section = [
        projectsData[0].section,
        projectsData[1].section,
        projectsData[2].section,
        projectsData[3].section,
        projectsData[4].section,
        projectsData[5].section,
    ];


    return (
        <div id='projects'>
            <div className='top'>
                <h1>projects</h1>
                <div>
                    <h3>{id[index]}/6</h3>
                    <div className='buttons'>
                        <button>
                            <img width={30} src="/icons/arrow-left.png" onClick={() => setIndex((index === 0) ? index = 5 : index - 1)} />
                        </button>
                        <button>
                            <img width={30} src="/icons/arrow-right.png" onClick={() => setIndex((index >= 5) ? index = 0 && index + 1 : index + 1)} />
                        </button>
                    </div>
                </div>
            </div>
            <div className='images'>
                <div className="important" >
                    <img width={520} height={520} src={(index > 5) ? imgs[index - 6] : imgs[index]} />
                    <div className="d-flex justify-between">
                        <div>
                            <h1>{(index > 5) ? name[index - 6] : name[index]}</h1>
                            <span>{(index > 5) ? section[index - 6] : section[index]}</span>
                        </div>
                        <Link to='/collections' relative='path'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><g id="_01_align_center" data-name="01 align center"><path d="M24,10,21.8,0H2.2L.024,9.783,0,11a3.966,3.966,0,0,0,1,2.618V21a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V13.618A3.966,3.966,0,0,0,24,11ZM2,10.109,3.8,2H7V6H9V2h6V6h2V2h3.2L22,10.109V11a2,2,0,0,1-2,2H19a2,2,0,0,1-2-2H15a2,2,0,0,1-2,2H11a2,2,0,0,1-2-2H7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2ZM20,22H4a1,1,0,0,1-1-1V14.858A3.939,3.939,0,0,0,4,15H5a3.975,3.975,0,0,0,3-1.382A3.975,3.975,0,0,0,11,15h2a3.99,3.99,0,0,0,3-1.357A3.99,3.99,0,0,0,19,15h1a3.939,3.939,0,0,0,1-.142V21A1,1,0,0,1,20,22Z" /></g></svg>
                        </Link>
                    </div>
                </div>
                <div className='img2'>
                    <img width={450} height={450} src={(index > 4) ? imgs[index - 5] : imgs[index + 1]} />
                    <h1>{(index > 4) ? name[index - 5] : name[index + 1]}</h1>
                    <span>{(index > 4) ? section[index - 5] : section[index + 1]}</span>
                </div>
                <div>
                    <img width={450} height={450} src={(index > 3) ? imgs[index - 4] : imgs[index + 2]} />
                    <h1>{(index > 3) ? name[index - 4] : name[index + 2]}</h1>
                    <span>{(index > 3) ? section[index - 4] : section[index + 2]}</span>
                </div>
            </div>
        </div>
    )
}

export default Projects;