import React from 'react'
import Header from './header';
import About from './about';
import Gallery from './gallery';
import Contacts from './contacts';
import Projects from './projects';
import Services from './services';


function HomePage() {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Projects />
            <Gallery />
            <Contacts />
        </div>
    )
}

export default HomePage
