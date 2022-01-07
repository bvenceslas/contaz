import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css';
import contactInfo from '../../assets/contact-info.png';
import name from '../../assets/name.png';
import gender from '../../assets/gender.png';
import drop from '../../assets/delete-contact.png';
import email from '../../assets/email.png';
import phoneNumber from '../../assets/phone-number.png';
import factory from '../../assets/work.png';

const ContactDetails = () => {

    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // set the param id
    const { id } = useParams();
    const navigate = useNavigate();
    const contactsURL = 'http://localhost:7000/contacts/'+ id;  
    
    useEffect(() => {
        fetch(contactsURL)
            .then(response => {
                if(!response.ok){
                    setContact(null);
                    throw new Error('Cannot fetch contacts from this url');
                }else{
                    return response.json()
                }
            })
            .then(data => {
                setLoading(false);
                setError(null);
                setContact(data);
                console.log(`contact detail data >>`, data)
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })
    }, [contactsURL]);

    const handleDelete = () => {
            fetch(contactsURL, {
                method: 'DELETE',
            })
            .then(response => {
                if(!response.ok){
                    setContact(null);
                    throw new Error('Cannot fetch contact from this url');
                }else{
                    return response.json()
                }
            })
            .then(() => {
                navigate('/');
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            });        
    }


    return ( 
        <div className="contact-details">
            <div className="contact-info-header">
                <img src={contactInfo} alt="contact list" />
                { contact &&<h2>{`${contact.firstName} ${contact.lastName}`}</h2>}
                { !contact &&<h2>Contact Details</h2>}
            </div>

            { // if the data are loading
                loading && <div style={{
                                color: '#0984e3',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginTop: '50px'
                            }}
                            >
                                Loading ...
                            </div>
            }
            { // if there is any error
                error && <div style={{
                                color: '#d02580',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginTop: '50px'
                            }}
                            >
                                { error }
                            </div>
            }
            {   // if the data is ready             
                contact &&  (
                    <div className="contact-wrapper">
                        <div className="contact">
                            <div className="name">
                                <img src={name} alt="contact name" />
                                <p>{`${contact.firstName} ${contact.lastName}`}</p>
                            </div>
                            <div className="gender">
                                <img src={gender} alt="contact gender" />
                                <p>{contact.gender}</p>
                            </div>
                            <div className="phone-number">
                                <img src={phoneNumber} alt="contact phone number" />
                                <p>{contact.phone}</p>
                            </div>
                            <div className="email">
                                <img src={email} alt="contact email" />
                                <p>{contact.email}</p>
                            </div>
                            <div className="factory">
                                <img src={factory} alt="contact factory" />
                                <p>{contact.factory}</p>
                            </div>
                        </div>

                
                
                        <div className="delete-btn">                        
                            <button onClick={handleDelete}>
                                <img src={drop} alt="delete contact" />
                                Delete Contact
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
 
export default ContactDetails;