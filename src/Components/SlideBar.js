import React from 'react'

// data
import data from '../Data/data.json'

const SlideBar = () => {
    return (
        <>
            <aside className="slide-bar">
                <div className="close-mobile-menu">
                <a href="#"><i className="fas fa-times" /></a>
                </div>
                <nav className="side-mobile-menu">
                <ul id="mobile-menu-active">
                    {
                        data.header.nav.map((item, id) => {
                            return <li key={id}><a href={item.link} data-scroll> {item.name} </a></li>
                        })
                    }
                </ul>
                </nav>
            </aside>
            <div className="body-overlay" />
        </>
    )
}

export default SlideBar
