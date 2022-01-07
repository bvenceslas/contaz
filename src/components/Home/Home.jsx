import './index.css';
import contactList from '../../assets/contact-list.png';
import name from '../../assets/name.png';
import gender from '../../assets/gender.png';
import email from '../../assets/email.png';
import phoneNumber from '../../assets/phone-number.png';
import factory from '../../assets/work.png';

const Home = () => {
    return ( 
        <div className="home">
            <div className="header">
                <img src={contactList} alt="contact list" />
                <h3>My Contacts</h3>
            </div>

            <div className="contact-list">
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
                
            </div>
        </div>
     );
}
 
export default Home;