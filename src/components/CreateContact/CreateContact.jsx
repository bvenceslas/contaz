import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import addContact from '../../assets/add-contact.png';
import name from '../../assets/name.png';
import genderIco from '../../assets/gender.png';
import emailIco from '../../assets/email.png';
import phoneNumber from '../../assets/phone-number.png';
import factoryIco from '../../assets/work.png';

const CreateContact = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const contactsURL = 'http://localhost:7000/contacts/';
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        gender: 'Homme',
        phone: '',
        email: '',
        factory: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const payload = {
            ...formData,
            id: formData.phone
        }
        setLoading(true);
        await fetch(contactsURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(() => {
            console.log('Contact created successfully');	
            setLoading(false);
            navigate('/');
        })
        .catch(err => {
            setError(err.message);
        });
    }

    return ( 
        <div className="create-contact">
            <div className="header-create-contact">
                <img src={addContact} alt="add contact" />
                <h2>Add a new contact</h2>
            </div>
            <div className="contact-inputs">
                <form onSubmit={handleSubmit}>
                    {/* form data here */}
                    <div className="input-wrapper">
                        <img src={name} alt="contact name" />
                        <label>FirstName</label>                        
                        <input 
                            type="text"
                            required                            
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        />
                    </div>
                    <div className="input-wrapper">
                        <img src={name} alt="contact name" />
                        <label>LastName</label>                        
                        <input 
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        />
                    </div>
                    <div className="input-wrapper">
                        <img src={genderIco} alt="contact gender" />
                        <label>Gender</label>
                        <select 
                            value={formData.gender}
                            onChange={(e) => setFormData({...formData, gender: e.target.value})}
                            >
                            <option value="Homme">Homme</option>
                            <option value="Femme">Femme</option>
                            <option value="Non Specifié">Non Specifié</option>
                        </select>
                    </div>
                    <div className="input-wrapper">
                        <img src={phoneNumber} alt="contact phone number" />
                        <label>Phone</label>                        
                        <input 
                            type="text"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>
                    <div className="input-wrapper">
                        <img src={emailIco} alt="contact email" />
                        <label>Email</label>                        
                        <input 
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                    <div className="input-wrapper">
                        <img src={factoryIco} alt="contact factory" />
                        <label>Factory</label>                        
                        <input 
                            type="text"
                            required
                            value={formData.factory}
                            onChange={(e) => setFormData({...formData, factory: e.target.value})}
                        />
                    </div>
                    <div className="submit-button">
                        { loading && <button type="submit" disabled>Adding Contact</button>}
                        { !loading && <button type="submit">Add Contact</button>}
                        {/* <button type="submit">Add Contact</button> */}
                    </div>
                </form>
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
            </div>
        </div>
     );
}
 
export default CreateContact;