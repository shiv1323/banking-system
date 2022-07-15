import React from 'react'

import {
    Button
}

    from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Component_css/text.css'

function Apptext() {
    return (
        <div className="overlay">
            <div className="container">
                <h1>Pay, invest, save <br /> your cash with <br /> a single bank</h1> </div> <div className="d-flex justify-content-space-between addition__">
                <Link to="/Banking-System"><Button className='addition-btn w-30 '>Get started</Button></Link>  <h3>The modern way to control your <br /> savings with jsut one step</h3> </div> </div>)
}

export default Apptext