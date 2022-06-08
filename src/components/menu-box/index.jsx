import React from "react";

class MenuBox extends React.Component {
    render() {
        return <div className={'menu-box'}>
            <span style={{ backgroundImage: `url(${this.props.data.image})` }}></span>
            <h3>{this.props.data.title}</h3>
            <p className="menu-text">{this.props.data.text}</p>
            <p className="menu-price">{this.props.data.price}</p>
        </div>


    }


}
export default MenuBox