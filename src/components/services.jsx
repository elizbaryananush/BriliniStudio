import '../css/services.scss';
import React, { useState } from "react";
import servicesData from "../datas/servicesData";
import { Link } from "react-router-dom";

function Services() {

    let [showHide1, setShowHide1] = useState('none')
    let [showHide2, setShowHide2] = useState('none')
    let [showHide3, setShowHide3] = useState('none')
    let [showHide4, setShowHide4] = useState('none')

    function show1() {
        if (showHide1 === 'flex') {
            setShowHide1('none')
            document.getElementById('image1').style.color = "grey"
            document.getElementById('image1').style.borderBottom = "0px"

        } else {
            setShowHide1('flex')
            setShowHide2('none')
            setShowHide3('none')
            setShowHide4('none')
            document.getElementById('image1').style.color = "black"
            document.getElementById('image2').style.color = "grey"
            document.getElementById('image3').style.color = "grey"
            document.getElementById('image4').style.color = "grey"
            document.getElementById('image1').style.borderBottom = "2px solid black"
            document.getElementById('image2').style.borderBottom = "0px"
            document.getElementById('image3').style.borderBottom = "0px"
            document.getElementById('image4').style.borderBottom = "0px"
        }
    }

    function show2() {
        if (showHide2 === 'flex') {
            setShowHide2('none')
            document.getElementById('image2').style.color = "grey"
            document.getElementById('image2').style.borderBottom = "0px"
        } else {
            setShowHide2('flex')
            setShowHide1('none')
            setShowHide3('none')
            setShowHide4('none')
            document.getElementById('image1').style.color = "grey"
            document.getElementById('image2').style.color = "black"
            document.getElementById('image3').style.color = "grey"
            document.getElementById('image4').style.color = "grey"
            document.getElementById('image1').style.borderBottom = "0px"
            document.getElementById('image2').style.borderBottom = "2px solid black"
            document.getElementById('image3').style.borderBottom = "0px"
            document.getElementById('image4').style.borderBottom = "0px"
        }
    }
    function show3() {
        if (showHide3 === 'flex') {
            setShowHide3('none')
            document.getElementById('image3').style.color = "grey"
            document.getElementById('image3').style.borderBottom = "0px"
        } else {
            setShowHide1('none')
            setShowHide2('none')
            setShowHide3('flex')
            setShowHide4('none')
            document.getElementById('image1').style.color = "grey"
            document.getElementById('image2').style.color = "grey"
            document.getElementById('image3').style.color = "black"
            document.getElementById('image4').style.color = "grey"
            document.getElementById('image1').style.borderBottom = "0px"
            document.getElementById('image2').style.borderBottom = "0px"
            document.getElementById('image3').style.borderBottom = "2px solid black"
            document.getElementById('image4').style.borderBottom = "0px"
        }
    }
    function show4() {
        if (showHide4 === 'flex') {
            setShowHide4('none')
            document.getElementById('image4').style.color = "grey"
            document.getElementById('image4').style.borderBottom = "0px"

        } else {
            setShowHide1('none')
            setShowHide2('none')
            setShowHide3('none')
            setShowHide4('flex')
            document.getElementById('image1').style.color = "grey"
            document.getElementById('image2').style.color = "grey"
            document.getElementById('image3').style.color = "grey"
            document.getElementById('image4').style.color = "black"
            document.getElementById('image1').style.borderBottom = "0px"
            document.getElementById('image2').style.borderBottom = "0px"
            document.getElementById('image3').style.borderBottom = "0px"
            document.getElementById('image4').style.borderBottom = "2px solid black"
        }
    }


    const id = [
        servicesData[0].id,
        servicesData[1].id,
        servicesData[2].id,
        servicesData[3].id,
    ];

    const imgs = [
        servicesData[0].image,
        servicesData[1].image,
        servicesData[2].image,
        servicesData[3].image,
    ];

    return (
        <div id="services">
            <div className="leftPart">
                <h1 width={660}>we offer</h1>
                <div>
                    <h2 onClick={show1} id="image1">design of houses <sup>19</sup> </h2>
                    <img width={260} height={349.5} src={imgs[0]} style={{ display: showHide1, position: "absolute", top: -20 }} />
                    <div className="context2">
                        <p style={{ display: showHide1 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam sequi animi aliquid exercitationem amet libero, eligendi eius vero.</p>
                    </div>
                    <Link to='/collections' relative='path'>
                        <svg style={{ display: showHide1 }} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="50" height="50"><path d="M18.9,0H5.1A5.055,5.055,0,0,0,0,5V8
                        A1,1,0,0,0,2,8V5A3.054,3.054,0,0,1,5.1,2H18.9A3.054,3.054,0,0,1,22,5V19a3.054,3.054,0,0,1-3.1,3H5.1A3.054,3.054,0,0,1,2,19V16a1,1,0,0,0-2,0v3a5.055,5.055,0,0,0,5.1,5H18.9A5.055,5.055,0,0,0,24,19V5A5.055,5.055,0,0,0,18.9,0Z"/><path d="M3,12a1,1,0,0,0,1,1H4l13.188-.03-4.323,4.323a1,1,0,1,0,1.414,1.414l4.586-4.586a3,3,0,0,0,0-4.242L14.281
                        ,5.293a1,1,0,0,0-1.414,1.414l4.262,4.263L4,11A1,1,0,0,0,3,12Z"/></svg>
                    </Link>
                </div>
                <hr />
                <div>
                    <h2 onClick={show2} id="image2">interior design <sup>47</sup> </h2>
                    <img width={260} height={349.5} src={imgs[1]} style={{ display: showHide2, marginTop: 200 }} />
                    <div className="context2">
                        <p style={{ display: showHide2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam sequi animi aliquid exercitationem amet libero, eligendi eius vero.</p>
                    </div>
                    <Link to='/collections' relative='path'>
                        <svg style={{ display: showHide2 }} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="50" height="50"><path d="M18.9,0H5.1A5.055,5.055,0,0,0,0,5V8
                        A1,1,0,0,0,2,8V5A3.054,3.054,0,0,1,5.1,2H18.9A3.054,3.054,0,0,1,22,5V19a3.054,3.054,0,0,1-3.1,3H5.1A3.054,3.054,0,0,1,2,19V16a1,1,0,0,0-2,0v3a5.055,5.055,0,0,0,5.1,5H18.9A5.055,5.055,0,0,0,24,19V5A5.055,5.055,0,0,0,18.9,0Z"/><path d="M3,12a1,1,0,0,0,1,1H4l13.188-.03-4.323,4.323a1,1,0,1,0,1.414,1.414l4.586-4.586a3,3,0,0,0,0-4.242L14.281
                        ,5.293a1,1,0,0,0-1.414,1.414l4.262,4.263L4,11A1,1,0,0,0,3,12Z"/></svg>
                    </Link>

                </div>
                <hr />
                <div>
                    <h2 onClick={show3} id="image3">design of public objects <sup>18</sup> </h2>
                    <img width={260} height={349.5} src={imgs[2]} style={{ display: showHide3, marginTop: 400 }} />
                    <div className="context2">
                        <p style={{ display: showHide3 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam sequi animi aliquid exercitationem amet libero, eligendi eius vero.</p>
                    </div>
                    <Link to='/collections' relative='path'>
                        <svg style={{ display: showHide3 }} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="50" height="50"><path d="M18.9,0H5.1A5.055,5.055,0,0,0,0,5V8
                        A1,1,0,0,0,2,8V5A3.054,3.054,0,0,1,5.1,2H18.9A3.054,3.054,0,0,1,22,5V19a3.054,3.054,0,0,1-3.1,3H5.1A3.054,3.054,0,0,1,2,19V16a1,1,0,0,0-2,0v3a5.055,5.055,0,0,0,5.1,5H18.9A5.055,5.055,0,0,0,24,19V5A5.055,5.055,0,0,0,18.9,0Z"/><path d="M3,12a1,1,0,0,0,1,1H4l13.188-.03-4.323,4.323a1,1,0,1,0,1.414,1.414l4.586-4.586a3,3,0,0,0,0-4.242L14.281
                        ,5.293a1,1,0,0,0-1.414,1.414l4.262,4.263L4,11A1,1,0,0,0,3,12Z"/></svg>
                    </Link>
                </div>
                <hr />
                <div>
                    <h2 onClick={show4} id="image4">design of public interior <sup>24</sup> </h2>
                    <img width={260} height={349.5} src={imgs[3]} style={{ display: showHide4, marginTop: 612 }} />
                    <div className="context2">
                        <p style={{ display: showHide4 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam sequi animi aliquid exercitationem amet libero, eligendi eius vero.</p>

                    </div>
                    <Link to='/collections' relative='path'>
                        <svg style={{ display: showHide4}} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="50" height="50"><path d="M18.9,0H5.1A5.055,5.055,0,0,0,0,5V8
                        A1,1,0,0,0,2,8V5A3.054,3.054,0,0,1,5.1,2H18.9A3.054,3.054,0,0,1,22,5V19a3.054,3.054,0,0,1-3.1,3H5.1A3.054,3.054,0,0,1,2,19V16a1,1,0,0,0-2,0v3a5.055,5.055,0,0,0,5.1,5H18.9A5.055,5.055,0,0,0,24,19V5A5.055,5.055,0,0,0,18.9,0Z"/><path d="M3,12a1,1,0,0,0,1,1H4l13.188-.03-4.323,4.323a1,1,0,1,0,1.414,1.414l4.586-4.586a3,3,0,0,0,0-4.242L14.281
                        ,5.293a1,1,0,0,0-1.414,1.414l4.262,4.263L4,11A1,1,0,0,0,3,12Z"/></svg>
                    </Link>
                </div>
                <hr />
            </div>
        </div>
    )
}
export default Services;