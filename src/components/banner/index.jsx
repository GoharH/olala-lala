import React from "react";
import "./style.css";
import background from '../../assets/images/simple-house-01.jpg'
import logoimg from '../../assets/images/simple-house-logo.png'

class Banner extends React.Component {
    render() {
        return <section>
            <div className="banner-part" style={{ backgroundImage: `url(${background})` }}>
                <div className="G-container">
                    <div className="banner-box">
                        <div className="banner-left">
                            <span style={{ backgroundImage: `url(${logoimg})` }}></span>
                            <div>
                                <h1>Simple House</h1>
                                <p>new restaurant template</p>
                            </div>
                        </div>
                        <div className="banner-right">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    }
}
export default Banner