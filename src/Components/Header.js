import React from 'react'

// data
import data from '../Data/data.json'

const Header = () => {
    return (
        <>
           <div className="hero-area d-flex align-items-xl-center align-items-lg-center align- align-items-end">
        <div className="container">
            <div className="row">
            <div className="col-xl-7 col-lg-8">
                <div className="hero-text">
                <h3> {data.home.title} </h3>
                <p>
                    { data.home.summary }
                </p>
                <a href={data.home.button[0].link} className="a-btn mr-30 mr-xs-10"> {data.home.button[0].title} </a>
                <a href={data.home.button[1].link} className="play-btn"><i className="fas fa-play" />  {data.home.button[1].title} </a>
                </div>
            </div>
            </div>
        </div>
        <div className="hero-img">
            <img src={data.header.hero_url} alt="hero" />
        </div>
        <div className="hero-shape-wrap">
            <div className="hero-shape shape-1">
                <img src={data.header.shapeOne} alt="shape" />
            </div>
            <div className="hero-shape shape-2">
                <img src={data.header.shapeTwo} alt="shape" />
            </div>
            <div className="hero-shape shape-3">
                <img src={data.header.shapeThree} alt="shape" />
            </div>
            <div className="hero-shape shape-4">
                <img src={data.header.shapeFour} alt="shape" />
            </div>
            <div className="hero-shape shape-5">
                <img src={data.header.shapeFive} alt="shape" />
            </div>
            <div className="hero-shape shape-6">
                <img src={data.header.shapeSix} alt="shape" />
            </div>
            <div className="hero-shape shape-7">
                <img src={data.header.shapeSeven} alt="shape" />
            </div>
            <div className="hero-shape shape-8">
                <img src={data.header.shapeEight} alt="shape" />
            </div>
        </div>
        </div>

        </>
    )
}

export default Header
