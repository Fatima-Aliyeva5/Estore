import React from 'react'
import "./Hero.scss"
import Badge from 'react-bootstrap/Badge';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container d-flex align-items-center">
            <div className="hero-girl">
                <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png" alt="" />
            </div>
            <div className="hero-content">
                <span>60% Discount</span>
                <h1>Winter  Collection</h1>
                <p>Best Cloth Collection By 2020!</p>
                <button className='btn btn-primary rounded-pill p-3 px-4'>Shop Now</button>
            
            </div>
        </div>
    </div>
  )
}

export default Hero