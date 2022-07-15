import React from 'react'
import '../Component_css/Why.css'

function Why() {
    return (
        <div className="container why">
            <section className="why-us">
                <h1>Why to choose Our Bank?</h1>
                <p>We leverage open banking to turn your bank account into your
                    financial hub.<br />Control your finances like never before.</p>
            </section>
            <section className="features-section">
                <div className="feature-item">
                    <img src={require('../Image/bank-online.png')} alt="" />
                    <h1>Online Banking</h1>
                    <p>Our modern Website <br />
                        application allow you to keep<br />
                        track of your finances whereever<br />
                        you are in the world.</p>
                </div>
                <div className="feature-item">
                    <img src={require('../Image/finance.png')} alt="" />
                    <h1>Simple Budgeting</h1>
                    <p>See exactly where your money<br />
                        goes every month.Recieve<br />
                        notifications when you're close to<br />
                        hitting your limits.
                    </p>
                </div>

                <div className="feature-item">
                    <img src={require('../Image/idea.png')} alt="" />
                    <h1>Fast Onboarding</h1>
                    <p>We don't do branches.Open your<br />
                        accound minutes online and start<br />
                        taking controll of your finances<br />
                        right away.</p>
                </div>
            </section>
        </div>
    )
}

export default Why