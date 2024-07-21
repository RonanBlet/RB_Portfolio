import photo from '../images/Gustave.jpg'
import Collapsible from '../components/Collapsible';
import Header from '../components/section/Header';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About(){
    return(
        <div>
            <Header version={false}/>
            <div className='about'>
            <div className='about-left'>
                <img src={photo} alt="owner"/>
            </div>
            <div className='about-right'>
                <h3>Ronan Blet</h3>
                <p className='description'>Bonjour ! Je m'appelle Ronan Blet et je suis un développeur fullstack
                     junior. Je suis passionné d'informatique
                      et de développement. Après avoir commencé
                       des études en informatique qui ne correspondaient
                        pas à mes attentes, j'ai décidé de me spécialiser dans le web.

                    J'ai suivi une formation chez OpenClassrooms où j'ai développé mes compétences en effectuant des projets 
                    professionnalisants.

                    Je suis actuellement à la recherche de nouvelles opportunités pour mettre en pratique mes compétences et contribuer à des projets innovants. N'hésitez pas à me contacter pour discuter de collaborations potentielles !</p>
                <Collapsible title="Qualification et expertise">
                    <p className='expertise'>
                        HTMl : <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
                        <br></br>
                        CSS : <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
                        <br></br>
                        Javascript :<FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
                        <br></br>
                        React :<FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
                        <br></br>
                        Node :<FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
                        <br></br>
                        Responsive :<FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/>
                    </p>
                </Collapsible>
                <Collapsible title="Etudes" className='collapse-about'>
                    <p>
                    J'ai obtenu un baccalauréat scientifique, ce qui m'a permis de développer une solide base en mathématiques et en sciences, essentielle pour la logique de programmation.
                    </p>
                    <p>
                    J'ai passé deux années à l'université où j'ai étudié la programmation en Java, C, et C++. Ces expériences m'ont apporté une compréhension approfondie des principes fondamentaux de la programmation et des structures de données.
                    </p>
                    <p>
                    Désireux de me spécialiser dans le développement web, j'ai suivi une formation intensive chez OpenClassrooms. Ce programme m'a permis d'acquérir des compétences pratiques et théoriques en HTML, CSS, JavaScript, ainsi que dans des frameworks modernes comme React et Node.js. Grâce à cette formation, j'ai pu travailler sur des projets concrets, affiner mes compétences techniques et développer une expertise complète en développement web.
                    </p>
                </Collapsible>
            </div>
        </div>
        </div>
    )
};

export default About;