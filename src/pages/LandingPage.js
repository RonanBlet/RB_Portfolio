import Holder from '../components/section/Holder';
import Service from '../components/Service';
import Apropos from '../components/section/Apropos';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import AnimatedText from '../components/AnimatedText';
import Question from '../components/section/Question';
import ico_web from '../images/ico_web.svg';
import ico_int from '../images/ico_int.svg';
import ico_resp from '../images/ico_resp.svg';
import Header from '../components/section/Header';
import ProjetSection from '../components/project/ProjectSection';

function LandingPage(){
    return(
        <div className='landing'>
            <Header version={true}/>
            <h1>Votre developpeur web <span className='fullstack'>&lt;<AnimatedText />&gt;</span></h1>
            
            <Holder />
            <section id='service'>
                <h2 className='marge'>Mes Services</h2>
                <div className='services'>
                    <div className='services-left'>
                    <Service 
                    backgroundColor='1'
                    text='vitrine, corporate, événementiel, e-commerce, applications mobiles, avec ou sans backend intégré.' 
                    img={ico_web}
                    titre='Création de site'
                    />
                    <Service 
                    backgroundColor='2'
                    text="changement d'hébergeur, mise à jour des langages, transition entre CMS, et optimisation de la configuration technique." 
                    img={ico_int} 
                    titre='Migration'
                    />
                    </div>
                    <div className='services-right'>
                    <Service 
                    backgroundColor='3'
                    text="ajout de fonctionnalités backend, intégration de bases de données, et adaptation au responsive design." 
                    img={ico_resp}
                    titre='Amélioration'
                    />
                    </div>
                </div>
            </section>
            <Apropos />
            <ProjetSection />
            <Question />
            <section className='contact' id='contact'>
                <h2 className='marge'>Contact</h2>
                <div className='contact-div'>
                    <ContactInfo />
                    <ContactForm />
                </div>
            </section>
            
        </div>
    )
};

export default LandingPage;