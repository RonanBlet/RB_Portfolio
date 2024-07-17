import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactForm(){

    const [formData, setFormData] = useState({
        firstName:'',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted', formData);
    }


    return(
    <form className="form" onSubmit={handleSubmit}>
        <div className="form-grid">
            <div className="form-group">
                <label htmlFor="firstName">Prénom</label>
                <input
                placeholder="John"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Nom</label>
                <input
                placeholder="Doe"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Courriel</label>
                <input
                placeholder="JohnDoe@gmail.com"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                placeholder="+33"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                />
            </div>
            <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <input
                placeholder="Votre demande"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                />
            </div>
        </div>
        <button type="submit" className="bouton-rose"><FontAwesomeIcon className="bouton-rose-fleche" icon={faArrowRight}/>J'envoie ma requête</button>
    </form>
    )
};

export default ContactForm;