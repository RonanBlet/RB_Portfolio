import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneVolume, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons';

function ContactInfo(){
    return(
        <div className="contact-info">
            <h3>Infos</h3>
            <p>
                <span className='info-icon'><FontAwesomeIcon icon={faPhoneVolume}/></span> 06 77 11 41 43</p>
            <p><span className='info-icon'><FontAwesomeIcon icon={faEnvelope}/></span> Blet.ronan@gmail.com</p>
            <p>
            <span className='info-icon'><FontAwesomeIcon icon={faLocationDot}/></span>
            <span>3 Rue du Château, 52160 Chalancey</span>
            </p>
        </div>
    )
};

export default ContactInfo;