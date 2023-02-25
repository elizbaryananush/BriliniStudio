import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sticky from "react-stickynode";

function Header() {
    return (
        <header id='home'>
            <div className='backgroundimg'>
                <img width={1688} src='/img/landingpicture.svg' />
            </div>
            <Sticky enabled={true}>
                <div className='navbar sticky'>
                    <div className='leftSide'>
                        <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Brilini</a>
                        <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Studio</a>
                    </div>
                    <ul className='rightSide'>
                        <a href="#about">about</a>
                        <a href="#projects">projects</a>
                        <a href="#gallery">gallery</a>
                        <a href='#contacts'>contacts</a>
                    </ul>
                </div>
            </Sticky>
            <div className='aaa'>
                <h1 className='wecreate'>We create</h1>
                <h1 className='interiorsthatone'>interiors that one</h1>
                <h1 className='wantstolivein'>wants to live in</h1>
                <div className='bbb d-flex justify-between'>
                    <div className='pdiv'>
                        <p>For more than 30 years, we've been</p>
                        <p>bringing projects to life around the world.</p>
                    </div>
                        <div className='bottom_part d-flex justify-between'>
                            <h3>furniture
                                <div>___________</div>
                            </h3>
                    <Link to='/furniture' relative='path'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="49" height="49"><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm22,0A10,10,0,1,1,12,2,10.011,10.011,0,0,1,22,12ZM13.121,6.293a1,1,0,0,0,0,1.414L16.413,11,6,11.007a1,1,0,1,0,0,2L16.414,13l-3.293,3.293a1,1,0,1,0,1.389,1.438l.025-.024,3.586-3.585a3,3,0,0,0,0-4.243h0L14.535,6.293A1,1,0,0,0,13.121,6.293Z" /></svg>
                            </button>
                    </Link>
                        </div>
                </div>
            </div>
        </header>
    )
}

export default Header;