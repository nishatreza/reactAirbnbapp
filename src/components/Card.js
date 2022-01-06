// import cardimg from "../images/imagecard.png"
import starimg from "../images/Star.png"


export default function Card(props) {
    // console.log(props.item.id)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"

    } else if (props.location === "Online") {
        badgeText = "ONLINE"

    }
    return (

        <section className="card">

            {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img src={props.coverImg} alt="" className="card--image" />

            <div className="card--stats">
                <img src={starimg} alt="" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>


            <p>{props.title}
            </p>
            <p> <span className="card--amount">From ${props.price}</span> / person </p>


        </section>

    );


}