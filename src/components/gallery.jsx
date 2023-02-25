import React from "react";
import '../css/gallery.scss';



function Gallery (){
    return(
<div id='gallery'>
        <div className='leftSide2'>
          <h1>gallery</h1>
          <p>We are constantly growing, learning, and improving and our partners are
            steadily increasing. 286 projects is a sizable number, but we always strive
            to be better, more relevant, more determined, and more successful than yesterday.
            We are not going to stop.</p>
          <div className='explore'>
            <h3>Explore our work
              <div>_______________________</div>
            </h3>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="49" height="49"><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm22,0A10,10,0,1,1,12,2,10.011,10.011,0,0,1,22,12ZM13.121,6.293a1,1,0,0,0,0,1.414L16.413,11,6,11.007a1,1,0,1,0,0,2L16.414,13l-3.293,3.293a1,1,0,1,0,1.389,1.438l.025-.024,3.586-3.585a3,3,0,0,0,0-4.243h0L14.535,6.293A1,1,0,0,0,13.121,6.293Z" /></svg>
            </button>
          </div>
        </div>
        <div className='rightSide2'>
          <div className='three'>
            <img width={360} height={68} src='/img/Rectangle11.png' />
            <img className='img2' width={360} height={520} src='/img/Rectangle16.png' />
            <img width={360} height={412} src='/img/Rectangle14.png' />
          </div>
          <div className='two'>
            <img width={424} height={450} src='/img/Rectangle12.png' />
            <img width={424} height={530} src='/img/Rectangle13.png' />
          </div>
        </div>
      </div>
    )
}

export default Gallery;