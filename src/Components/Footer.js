import React from 'react'

// data
import data from '../Data/data.json'

const Footer = () => {
    return (
        <>
           <footer>
            <div className="primary-footer pt-90 pb-50 pt-xs-50 pb-xs-20">
                <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-logo">
                        <img src={data.footer.logo} alt="logo" />
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-widget">
                        <ul>
                        {
                            data.footer.listOne.map((item, id) => {
                                return <li key={id}><a href={item.link}> {item.title} </a></li>
                            })
                        }
                        </ul>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-widget">
                        <ul>
                        {
                            data.footer.listTwo.map((item, id) => {
                                return <li key={id}><a href={item.link}> {item.title} </a></li>
                            })
                        }
                        </ul>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-social">
                        <h4> {data.footer.title} </h4>
                        <ul>
                        <li className="facebook">
                            <a href={data.footer.socialLink[0].facebook}><i className="fab fa-facebook-f" /></a>
                        </li>
                        <li className="twitter">
                            <a href={data.footer.socialLink[1].twitter}><i className="fab fa-twitter" /></a>
                        </li>
                        <li className="google">
                            <a href={data.footer.socialLink[2].google}><i className="fab fa-google-plus-g" /></a>
                        </li>
                        <li className="linkedin">
                            <a href={data.footer.socialLink[3].linkedin}><i className="fab fa-linkedin-in" /></a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="secondary-footer">
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-6">
                    <p className="copyright"> {data.footer.copyright} </p>
                    </div>
                    <div className="col-xl-6 col-md-6 text-right d-none d-xl-block d-lg-block d-md-block">
                    <p className="copyright">Design with <i className="fal fa-heart" /> by Sobuj.</p>
                    </div>
                </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
