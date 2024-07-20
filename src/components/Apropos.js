import photoIa from '../images/iaphoto.svg'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Apropos(){
    return(
        <section className="Apropos" id='apropos'>
            <h3>A Propos</h3>
            <p>Bonjour ! Je m'appelle Ronan Blet et je suis un développeur fullstack junior passionné d'informatique et de développement. Je me suis spécialisé dans la création d'applications web optimisées et adaptatives, utilisant JavaScript grâce à des bibliothèques modernes comme React et Node.js.
                </p>
            <button type="button" onClick={() => {window.location.href = '/RB_Portfolio/about'}}><FontAwesomeIcon className="bouton-rose-fleche" icon={faArrowRight}/>Découvrez mon parcours</button>
            <img src={photoIa} alt="IA" className='imageIa'/>
        </section>
    )
};

export default Apropos;