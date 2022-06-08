import React from "react";
import './style.css'
import '../menu-box';
import gallery1 from '../../assets/images/gallery/01.jpg'
import gallery2 from '../../assets/images/gallery/02.jpg'
import gallery3 from '../../assets/images/gallery/03.jpg'
import gallery4 from '../../assets/images/gallery/04.jpg'
import gallery5 from '../../assets/images/gallery/05.jpg'
import gallery6 from '../../assets/images/gallery/06.jpg'
import gallery7 from '../../assets/images/gallery/07.jpg'
import gallery8 from '../../assets/images/gallery/08.jpg'
import MenuBox from "../menu-box";


class Menu extends React.Component {

    sectionsData = [
        {
            image: gallery1,
            title: 'Fusce dictum finibus',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55'
        },
        {
            image: gallery2,
            title: 'Aliquam sagittis',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$65 / $70'
        },
        {
            image: gallery3,
            title: 'Sed varius turpis',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$30.50'
        },
        {
            image: gallery4,
            title: 'Aliquam sagittis',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$25.50'
        },
        {
            image: gallery5,
            title: 'Maecenas eget justo',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$80.25'
        },
        {
            image: gallery6,
            title: 'Quisque et felis eros',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$20 / $40 / $60'
        },
        {
            image: gallery7,
            title: 'Sed ultricies dui',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$94'
        },
        {
            image: gallery8,
            title: 'Donec porta consequat',
            text: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$15'
        }
    ]



    render() {
        return <section className="menu-part">
            <div className="G-container">
                <div className="menu">
                    {this.sectionsData.map((item, index) => {
                        return <div className="G-padding-25" key={index}>
                            <MenuBox data={item} />
                        </div>
                    })}
                </div>
            </div>
        </section>
    }
}
export default Menu