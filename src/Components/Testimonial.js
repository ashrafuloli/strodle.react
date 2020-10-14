import React from 'react'

// data 
import data from '../Data/data.json'

const Testimonial = () => {
    return (
        <>
            <div className="testimonial-area pt-150 pb-150 pb-xs-50 pt-xs-50">
                <div className="container">
                    <div className="row justify-content-center mb-60 mb-xs-30">
                    <div className="col-xl-5 col-lg-7">
                        <div className="section-title text-center">
                        <h3> {data.testimonial.title} </h3>
                        <p>
                            {data.testimonial.summary}
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11">
                        <div className="testimonial-slider owl-carousel">
                        {
                            data.testimonial.review.map((item, id) => {
                                return <div key={id} className="testimonial-slide">
                                            <div className="testimonial-wrap">
                                            <div className="testimonial-thumb">
                                                <img src={item.image} alt="author" />
                                            </div>
                                            <div className="testimonial-details">
                                                <div className="icon"><i className="fas fa-quote-left" /></div>
                                                <p>
                                            {item.comment}
                                                </p>
                                            </div>
                                            <div className="author">
                                                <h4> {item.name} </h4>
                                                <ul className="rating">
                                                <li className="active"><i className="fas fa-star" /></li>
                                                <li className="active"><i className="fas fa-star" /></li>
                                                <li className="active"><i className="fas fa-star" /></li>
                                                <li className="active"><i className="fas fa-star" /></li>
                                                <li><i className="fas fa-star" /></li>
                                                </ul>
                                            </div>
                                            </div>
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

export default Testimonial
