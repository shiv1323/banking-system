import React from 'react'
import '../Component_css/Aboutus.css'
import AppNavbar from './AppNavbar'
import Footer from './Footer'
import Why from './Why'
function Aboutus() {
    return (
        <>
            <AppNavbar />
            <div className='background__'>
                <section className="page-section" id="about">
                    <div className="site-section cta-big-image" >
                        <div className="container">
                            <div className="row mb-5 justify-content-center">
                                <div className="col-md-8 text-center">
                                    <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="">About Us</h2>
                                    <p className="lead" data-aos="fade-up" data-aos-delay="100"></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
                                    <figure className="circle-bg">
                                        <img src={require(`../Image/img1.jpg`)} alt="about-us_image" className="img-fluid" />
                                    </figure>
                                </div>
                                <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">

                                    <h3 className="text-black mb-4">We Solve Your Financial Problem</h3>
                                    <p> Our bankers get to know you and your specific financial needs. Money experts, they can provide valuable advice and financial solutions to help you make the most of every financial decision. BANK helps you DO MORE.</p>
                                    <p></p>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <Why />
            </div>
            <Footer />
        </>

    )
}

export default Aboutus