import React from 'react'

// data
import data from '../Data/data.json'

const Screenshots = () => {
    return (
        <>
            <div className="screenshot-area pt-150 pb-150 pb-xs-50 pt-xs-50">
            <div className="container">
                <div className="row justify-content-center mb-60">
                <div className="col-xl-8 col-lg-8">
                    <div className="section-title text-center">
                    <h3> {data.slider.title} </h3>
                    <p>
                        {data.slider.summary}
                    </p>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-xl-12">
                    <div className="screenshot-slider owl-carousel">
                        {
                            data.slider.image.map((img, id) => {
                                return <div key={id} className="screenshot-slide">
                                            <img src={img} alt="screenshot" />
                                        </div>
                            })
                        }
                    </div>
                </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Screenshots
