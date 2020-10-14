import React from 'react'

// data
import data from '../Data/data.json'


const Navbar = () => {

    return (
        <>
            <header className="header-area">
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-md-2 col-2 d-block d-xl-none d-lg-none">
                            <div className="open-mobile-menu">
                                <a href="#">
                                    <img src={data.header.bars_url} alt="bar" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-7 col-9">
                            <div className="logo">
                                <a href={data.header.logoLink}><img src={data.header.logo_url} alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-3 col-7 d-flex justify-content-end align-items-center">
                            <div className="main-menu">
                                <ul>
                                    {
                                        data.header.nav.map((item, id) => {
                                            return <li key={id}><a href={item.link} data-scroll> {item.name} </a></li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="header-btn">
                                <a href={data.header.button.link}> {data.header.button.name} </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar
