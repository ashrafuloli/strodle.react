import React from 'react'

// data
import data from '../Data/data.json'

const Cta = () => {
    return (
        <>
            <div className="cta-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-12">
                        <div className="cta-text text-center">
                        <h3> {data.cta.title} </h3>
                        <p> {data.cta.summary} </p>
                        <a href={data.cta.button[0].link} className="gplay-btn mr-30">
                            <i className="fab fa-google-play" />
                            {data.cta.button[0].title}
                        </a>
                        <a href={data.cta.button[1].link} className="apple-btn">
                            <i className="fab fa-apple" />
                            {data.cta.button[1].title}
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cta
