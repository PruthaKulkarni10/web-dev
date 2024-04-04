import image1 from './images/card1.jpg';
import image2 from './images/card2.jpg';
import image3 from './images/card3.jpg';

export default function Card(prop){
    return(

        <div class>
            {/* <p>Technology</p> */}
            {prop.title}
            <img src={prop.image} alt = "Tech"></img>
            {prop.desc}
            {/* <img src={prop.image} alt="Travel"></img>
            <img src={prop.image} alt="Food "></img> */}
        </div>

    );
}

export const Card_Data = 
[
    {
    title: "Technology",
    image: image1,
    desc: "Technology"

},

{
    title: "Travel",
    image: image2,
    desc: "Travel"

},

{
    title: "Food",
    image: image3,
    desc: "Food"

}
]


