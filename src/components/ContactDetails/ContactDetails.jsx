import './index.css';
import contactInfo from '../../assets/contact-info.png';
import name from '../../assets/name.png';
import gender from '../../assets/gender.png';
import drop from '../../assets/delete-contact.png';
import email from '../../assets/email.png';
import phoneNumber from '../../assets/phone-number.png';
import factory from '../../assets/work.png';

const ContactDetails = () => {
    return ( 
    <div className="contact-details">
        <div className="contact-info-header">
            <img src={contactInfo} alt="contact list" />
            <h2>Contact X</h2>
        </div>

        <div className="contact-wrapper">
            <div className="contact">
                <div className="name">
                    <img src={name} alt="contact name" />
                    <p>Venceslas Josh</p>
                </div>
                <div className="gender">
                    <img src={gender} alt="contact gender" />
                    <p>Homme</p>
                </div>
                <div className="phone-number">
                    <img src={phoneNumber} alt="contact phone number" />
                    <p>+243 978 125 250</p>
                </div>
                <div className="email">
                    <img src={email} alt="contact email" />
                    <p>bvenceslas@gmail.com</p>
                </div>
                <div className="factory">
                    <img src={factory} alt="contact factory" />
                    <p>Altech-RDC</p>
                </div>

            </div>

            <div className="delete-btn">                        
                <button>
                    <img src={drop} alt="delete contact" />
                    Delete Contact
                </button>
            </div>
        </div>

    </div> );
}
 
export default ContactDetails;