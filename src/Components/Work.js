import React from 'react'

// data
import data from '../Data/data.json'

const Work = () => {
    return (
        <>
          <div className="work-area pt-140 pb-70 pt-xs-50 pb-xs-50" id="work">
            <div className="container">
              <div className="row mb-30">
                <div className="col-xl-12">
                  <div className="section-title text-center">
                  <h3> {data.works.title} </h3>
                  <p> {data.works.summary} </p>
                  </div>
                </div>
              </div>
              <div className="row wrok-shape">
                {
                  data.works.steps.map((item, id) => {
                    return  <div key={id} className={item.class}>
                              <div className="work-wrap mb-50 mb-xs-30">
                                <div className="work-thumb">
                                <img src={item.image} alt="work-thumb" />
                                </div>
                                <div className="work-content">
                                  {/* <span className="icon"><img src={data.works.arrow_url} alt="arrow" /></span> */}
                                  { item.first_icon &&  <span className="icon"><img src={data.works.arrow_url} alt="arrow" /></span>}
                                  { item.sec_icon &&  <span className="icon"><img src={data.works.shape_left} alt="arrow" /></span>}
                                  <span className="num"> {item.id} </span>
                                  <h4><a href={item.link}>{item.summary}</a></h4>
                                </div>
                              </div>
                            </div>
                  })
                }
              </div>
            </div>
          </div>
        </>
    )
}

export default Work
