import React from "react";
import './style.css'


class MainPage extends React.Component {
    render() {
        return <section className="main">
            <div className="main-part">
                <div className="main-text">
                    <h2>Welcome to Simple House</h2>
                    <p>
                        Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download,
                        edit and use this TemplateMo layout for your commercial or non-commercial websites.
                    </p>
                </div>
            </div>
            <div className="main-buttons">
                <button>Pizza</button>
                <button>Salad</button>
                <button>Noode</button>
            </div>
        </section>
    }
}
export default MainPage