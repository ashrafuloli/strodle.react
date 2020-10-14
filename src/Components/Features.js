import React from 'react'

// data
import data from '../Data/data.json'

const Features = () => {
    return (
        <>
            <div className="features-area pt-150 pb-150 pb-xs-50 pt-xs-50" id="features">
            <div className="container">
                <div className="row justify-content-center mb-60">
                <div className="col-xl-5 col-lg-7">
                    <div className="section-title text-center">
                    <h3> {data.features.title} </h3>
                    <p>
                        {data.features.summary}
                    </p>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="features-wrap feature-border-top">
                    <h4> {data.features.types[0].level} </h4>
                    <ul>
                        { data.features.types[0].feature.map((item, id) => {
                            return <li key={id}> {item} </li>
                        }) }
                    </ul>
                    <div className="features-thumb">
                        <img src={data.features.featureOne_url} alt="feature" />
                    </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="features-wrap feature-border-bottom thumb-left">
                    <h4> {data.features.types[1].level} </h4>
                    <ul>
                    { data.features.types[1].feature.map((item, id) => {
                            return <li key={id}> {item} </li>
                        }) }
                    </ul>
                    <div className="features-thumb">
                        <img src={data.features.featureTwo_url} alt="feature" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Features
