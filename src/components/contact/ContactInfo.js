import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneVolume, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';

function ContactInfo(){
    return(
        <div className="contact-info" itemScope itemType='http://schema.org/LocalBusiness'>
            <h3>Infos</h3>
            <p>
                <span className='info-icon' itemProp='telephone'><FontAwesomeIcon icon={faPhoneVolume}/></span>
                 06 77 11 41 43</p>
                <p><span className='info-icon' itemProp='email'><FontAwesomeIcon icon={faEnvelope}/></span>
                 Blet.ronan@gmail.com</p>
            <p itemProp='adress' itemScope itemType='https://schema.org/PostalAddress'>
                <span className='info-icon'><FontAwesomeIcon icon={faLocationDot}/></span>
                <span itemProp='streetAddress'>3 Rue du Château</span>, 
                <span itemProp='postalCode'>52160</span>
                <span itemProp='adressLocality'> Chalancey</span>
            </p>
        </div>
    )
};

export default ContactInfo;