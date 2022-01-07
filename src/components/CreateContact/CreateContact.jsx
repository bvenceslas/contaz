import './index.css';
import addContact from '../../assets/add-contact.png';
import name from '../../assets/name.png';
import gender from '../../assets/gender.png';
import email from '../../assets/email.png';
import phoneNumber from '../../assets/phone-number.png';
import factory from '../../assets/work.png';

const CreateContact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        <label>Name</label>
                        
                        <input 
                            type="text"
                            required
                        />
                    </div>

                    <div className="input-wrapper">
                        <img src={gender} alt="contact gender" />
                        <label>Gender</label>

                        <select Value="Homme">
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
                        />
                    </div>

                    <div className="input-wrapper">
                        <img src={email} alt="contact email" />
                        <label>Email</label>
                        
                        <input 
                            type="email"
                            required
                        />
                    </div>

                    <div className="input-wrapper">
                        <img src={factory} alt="contact factory" />
                        <label>Factory</label>
                        
                        <input 
                            type="text"
                            required
                        />
                    </div>
                </form>
                <div className="submit-button">
                    <button>Add Contact</button>
                </div>
            </div>
        </div>
     );
}
 
export default CreateContact;