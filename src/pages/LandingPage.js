import Holder from '../components/Holder';
import Service from '../components/Service';
import Apropos from '../components/Apropos';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import AnimatedText from '../components/AnimatedText';
import Question from '../components/Question';
import ico_web from '../images/ico_web.svg';
import ico_int from '../images/ico_int.svg';
import ico_resp from '../images/ico_resp.svg';
import Header from '../components/Header';
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
                    text='Site vitrine, corporate, évènementiel, e-commerce, intranet, application mobile' 
                    img={ico_web}
                    titre='Gestion de projets web'
                    />
                    <Service 
                    backgroundColor='2'
                    text='Des intégrations (X)HTML / CSS respectueuse des standars du Web.' 
                    img={ico_int} 
                    titre='Intégration Web'
                    />
                    </div>
                    <div className='services-right'>
                    <Service 
                    backgroundColor='3'
                    text='Compatible tous supports, tablette & application mobile.' 
                    img={ico_resp}
                    titre='Responsive design'
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