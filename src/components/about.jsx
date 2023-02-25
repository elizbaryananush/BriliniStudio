import '../css/about.scss';
import React from "react";

function About (){
    return(
        <div id="about">
        <div className='text'>
          <h1>about</h1>
          <p>We have created an architectural and design bureau, distinguished by an
            innovative creative approach in the field of design and the highest level
            of ethics in the field of business, based on honest and open relationships,
            we reach an understanding with the client and partners. We brought together
            highly qualified professionals dedicated to their work, motivated to succeed
            in all areas related to the objects of architecture and design.
            <br />
            <br />
            <br />
            High standards of quality, creativity of ideas, absolute mastery of the regulatory
            framework, responsibility for the executed projects - all this enables the client
            to trust us. We are focused on satisfying the client's design needs, integrating
            them into the creative process of architectural design, interior design and other
            sections of the project. We are expanding the range of activities of our architectural
            company, to achieve a balance in the system of "ideas and implementation." Our team
            consists of architects, designers and engineers from different areas. </p>
        </div>
        <div className='numbers'>
          <img width={380} src='/img/Rectangle17.svg' />
          <div className="grid">
            <div className="player">
              <h1>256</h1>
              <p>Unique Projects Finished</p>
            </div>
            <div className="player">
              <h1>139</h1>
              <p>Projects <br />
                in Progress</p>
            </div>
            <div className="player">
              <h1>16</h1>
              <p>Achievements</p>
            </div>
            <div className="player">
              <h1>13</h1>
              <p>Countries that We Operate In</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About;