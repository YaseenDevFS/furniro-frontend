import React from 'react'
import './Range.css'
import img1 from '../../assets/Mask Group.png'
import img2 from '../../assets/Mask Group (1).png'
import img3 from '../../assets/Image-living room.png'

const Range = () => {
  return (
    <div className='range'>
        <div className="title">
            <h1>Browse The Range</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="range-imgs">
            <div className="img">
                <img src={img1} />
                <h2>Dining</h2>
            </div>
            <div className="img">
                <img src={img2} />
                <h2>Living</h2>
            </div>
            <div className="img">
                <img src={img3} />
                <h2>Bedroom</h2>
            </div>
        </div>
    </div>
  )
}

export default Range