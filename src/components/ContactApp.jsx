import { useState } from "react";
import ContactDetails from "./ContactDetails";
import './ContactApp.css'

export default function ContactApp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [contacts, setContacts] = useState([])
    const [id, setId] = useState(1)
    // const [detailsStyling, setDetailsStyling] = useState('display:none')
    const statesArray = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];


    const handleSubmit = (e) => {
        e.preventDefault()
        let contact = {id: id, firstName: firstName, lastName: lastName, email: email, phone: phone, address: address, city: city, state: state, zipCode: zipCode}
        setContacts([...contacts, contact])
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setCity('')
        setState('')
        setZipCode('')
        setId(id + 1)
        
    }


    return (
        <div className="ContactApp">
            <div  className="inputFormField">
                <form onSubmit={handleSubmit} className="inputForm">
                    <div className="firstAndLastName">
                    <p>
                        <label htmlFor="firstName">First Name: </label>
                        <input id="firstName" type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required />
                    </p>
                    <p>
                        <label htmlFor="lastName">Last Name: </label>
                        <input id="lastName" type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required />
                    </p>
                    </div>
                    <div className="emailAndPhone">
                    <p>
                        <label htmlFor="email">Email: </label>
                        <input id="email" type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </p>
                    <p>
                        <label htmlFor="phone">Phone: </label>
                        <input id="phone" type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required />
                    </p>
                    </div>
                    <div className="addressAndCity">
                    <p>
                        <label htmlFor="address">Address: </label>
                        <input id="address" type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required />
                    </p>
                    <p>
                        <label htmlFor="city">City: </label>
                        <input id="city" type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required />
                    </p>
                    </div>
                    <div className="stateAndZip">
                    <p>
                        <label htmlFor="state">State: </label>
                        <select name="state" id="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}>
                            {statesArray.map((stateOption, i) => <option key={i} value={stateOption}>{stateOption}</option>)}
                        </select>
                    </p>
                    <p>
                        <label htmlFor="zipCode">Zip Code: </label>
                        <input id="zipCode" type="text"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            required />
                    </p>
                    </div>
                    <button type="submit">Add Contact</button>
                </form>
            </div>
            <div className="contactList">
                {contacts && (contacts.map((person, i) => 
                    <div key={i} className="contactCard">
                        <div className="contactCardNames">
                        <div className="firstNameContactCard">{person.firstName}</div>
                        <div className="lastNameContactCard">{person.lastName}</div>
                        </div>
                        <div className="contactCityState">
                        <div className="cityContactCard">{person.city}</div>
                        <div className="stateContactCard">{person.state}</div>
                        </div>
                        <div className="contactCardDetails">
                        <ContactDetails address={person.address} zipCode={person.zipCode} email={person.email} phone={person.phone} />
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )

}