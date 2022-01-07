import { useState, useEffect } from 'react';
import './index.css';
import contactList from '../../assets/contact-list.png';
import name from '../../assets/name.png';
import gender from '../../assets/gender.png';
import email from '../../assets/email.png';
import phoneNumber from '../../assets/phone-number.png';
import factory from '../../assets/work.png';

const Home = () => {

    const contactsURL = 'http://localhost:7000/contacts';

    const [contacts, setContacts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(contactsURL)
            .then(response => {
                if(!response.ok){
                    setContacts(null);
                    throw new Error('Cannot fetch contacts from this url');
                }else{
                    return response.json()
                }
            })
            .then(data => {
                setLoading(false);
                setError(null);
                setContacts(data);
                console.log(`data >>`, data)
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })
    }, [contactsURL]);

    return (
        <div className="home">
            <div className="header">
                <img src={contactList} alt="contact list" />
                <h2>My Contacts</h2>
            </div>

            { // if the data are loading
                loading && 
                    <div style={{
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
                error && 
                    <div style={{
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
                contacts && 
                    contacts.map(contact => (
                        <div className="contact-list" key={contact.id}>
                            <div className="contact" >
                                <div className="name">
                                    <img src={name} alt="contact name" />
                                    <p>{`${contact.firstname} ${contact.lastname}`}</p>
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
                        </div> 
                    ))     
            }

        </div>
     );
}
 
export default Home;