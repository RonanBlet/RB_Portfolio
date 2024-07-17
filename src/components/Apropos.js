import photoIa from '../images/iaphoto.svg'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Apropos(){
    return(
        <section className="Apropos">
            <h3>A Propos</h3>
            <p>Hello! I'm Thibault Walterspieler, a freelance fullstack engineer 
            based in Lyon (France), boasting over 5 years of hands-on experience 
            in web development. Specialised in cutting-edge technologies like 
            TypeScript, JavaScript, React, or Next.js, I am passionate about 
            crafting scalable, high-performance web applications that deliver 
            exceptional user experiences.'</p>
            <button type="button" onClick={() => {window.location.href = '/about'}}><FontAwesomeIcon className="bouton-rose-fleche" icon={faArrowRight}/>Découvrez mon parcours</button>
            <img src={photoIa} alt="IA" className='imageIa'/>
        </section>
    )
};

export default Apropos;