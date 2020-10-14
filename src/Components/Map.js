import React from 'react'

// data
import data from '../Data/data.json'

const Map = () => {
    return (
        <>
            <div className="map-area pt-150 pb-150 pb-xs-50 pt-xs-50" id="locations">
                <div className="container">
                    <div className="row justify-content-center mb-60 mb-xs-30">
                    <div className="col-xl-5 col-lg-7">
                        <div className="section-title text-center">
                        <h3> {data.map.title} </h3>
                        <p>
                            {data.map.summary}
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="map-thumb">
                        <img src={data.map.img} alt="map" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Map
