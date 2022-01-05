// import cardimg from "../images/imagecard.png"
import starimg from "../images/Star.png"


export default function Card(props) {
    // console.log(props)
    // es6 template string syntax backtick ---> `../images/${props.img}`
    return (

        <section className="card">

            {/* <img src={`../images/${props.img}`} alt="" className="card--image" /> */}
            <img src={props.img} alt="" className="card--image" />

            <div className="card--stats">
                <img src={starimg} alt="" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>


            <p>{props.title}
            </p>
            <p> <span className="card--amount">From ${props.price}</span> / person </p>


        </section>

    );


}