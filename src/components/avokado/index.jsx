import React from "react";
import './style.css'
import avokadoImg from '../../assets/images/img-01.jpg'

class Avokado extends React.Component {

    render() {
        return <section>
            <div className="G-container">
                <div className="avocado-part">
                    <div className="G-padding-50">
                        <div className="avocado-image" style={{ backgroundImage: `url(${avokadoImg})` }}></div>
                    </div>
                    <div className="G-padding-50">
                        <div className="avocado-text">
                            <h3>Maecenas nulla neque</h3>
                            <p>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited.
                                You will need to talk to us for additional permissions about our templates. Thank you.
                            </p>
                            <div className="avo-button">
                                <button className="avocado-button">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="copy-rights">Copyright © 2020 Simple House | Design: TemplateMo</p>
            </div>
        </section>
    }
}
export default Avokado