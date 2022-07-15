import React from 'react'
import '../Component_css/Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    const d = new Date();
    const year = d.getFullYear()
    return (
        <div className="row-no-gutters col-12 d-flex " id="bottom-footer" >
            <div className="col-xs-12 col-md-5 text-center" >
                <ul className="vertical-links small">
                    <li><Link to="/">Privacy</Link></li>
                    <li><Link to="/">Terms & Conditions</Link></li>
                    <li><Link to="/">Site Map</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                </ul>
            </div>
            <div className="col-xs-12 col-md-2 text-center" >
                <p>💜💜</p>
            </div>
            <div className="col-xs-12 col-md-5 text-center" >
                <ul>
                    <li className="small">© Copyright {year} Website by
                        <Link to="/" style={{ color: "white", fontWeight: "500" }}>Developr</Link>|{" "}.
                        All Rights reserved.</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer