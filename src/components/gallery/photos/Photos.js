import React from 'react';
import GeneralCarousel from './GeneralCarousel';

const Photos = () => {
  return (
    <div>
      <div className='row'>
          <div className='col-2'></div>
          <div className='col-8'>
              <GeneralCarousel/>
          </div>
          <div className='col-2'></div>
      </div>
    </div>
  )
}

export default Photos;