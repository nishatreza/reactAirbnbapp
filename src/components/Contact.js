import image2 from "../images/phone-icon.png"
import image3 from "../images/mail-icon.png"



export default function Contact({ img, name, phone, email }) {

    return (

        <div className="contact-card">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <div className="info-group">
                <img src={image2} alt="" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={image3} alt="" />
                <p>{email}</p>
            </div>
        </div>

    )


}
