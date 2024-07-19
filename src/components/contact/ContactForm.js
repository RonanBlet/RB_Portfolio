
import {useForm, ValidationError} from '@formspree/react';
import { useState, useEffect } from 'react';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactForm(){

    const [email,setEmail] = useState(false);
    const[state, handleSubmit] = useForm("mldrdqap");

    useEffect(() => {
        if(state.succeeded){
            setEmail(true);
        }
    },[state.succeeded]);
    


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
                required
                />
                <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                placeholder="+33"
                type="tel"
                id="phone"
                name="phone"
                required
                />
            </div>
            <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <input
                placeholder="Votre demande"
                id="message"
                name="message"
                required
                />
                <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                />
            </div>
        </div>
        {email && <p className='form-confirmation'>Votre e-mail a bien été envoyé !</p>}
        <button type="submit" disabled={state.submitting} className="bouton-rose"><FontAwesomeIcon className="bouton-rose-fleche" icon={faArrowRight}/>J'envoie ma requête</button>
    </form>
    )
};

export default ContactForm;