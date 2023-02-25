import React from "react";
import '../css/contacts.scss';

function Contacts() {
  return (
    <div width={1688}>
      <div className='contacts'>
        <div className='leftSide3'>
          <div id='contacts'>
            <h1>contacts</h1>
            <p>We are ready to share with you our design vision and lead you into the exciting world of creativity.</p>
          </div>
          <div id='information'>
            <div>
              <h1>adress</h1>
              <p>04053, Lorem, Ipsum str., 39</p>
            </div>
            <div>
              <h1>email</h1>
              <p>elizbaryananush27@gmail.com</p>
            </div>
            <div>
              <h1>phone</h1>
              <p>+374 77 838224
                <br />
                +374 91 838224
              </p>
            </div>
          </div>
        </div>
        <div className='rightSide3'>
          <h1>Let’s talk about <br />
            your project!</h1>
          <div>
            <input id='name' type="text" placeholder='name' />
            <input id='phone' type="text" placeholder='phone' />
          </div>
          <input id='massage' type="text" placeholder='massage' />
          <div className='explore3'>
            <h3>call me back
              <div>________________</div>
            </h3>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="49" height="49"><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm22,0A10,10,0,1,1,12,2,10.011,10.011,0,0,1,22,12ZM13.121,6.293a1,1,0,0,0,0,1.414L16.413,11,6,11.007a1,1,0,1,0,0,2L16.414,13l-3.293,3.293a1,1,0,1,0,1.389,1.438l.025-.024,3.586-3.585a3,3,0,0,0,0-4.243h0L14.535,6.293A1,1,0,0,0,13.121,6.293Z" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div id="context">
        <p>the site is created for portfolio works, it is not operational and does not belong to any company</p>
      </div>
    </div>
  )
}

export default Contacts;