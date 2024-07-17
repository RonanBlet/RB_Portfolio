import React from 'react';
import Holder from '../components/Holder';
import Service from '../components/Service';
import Apropos from '../components/Apropos';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import AnimatedText from '../components/AnimatedText';
import Project from '../components/Project';
import Question from '../components/Question';
import ico_web from '../images/ico_web.svg';
import ico_int from '../images/ico_int.svg';
import ico_resp from '../images/ico_resp.svg';
import imgGrimoire from '../images/bookie_portfolio.PNG';
import imgKasa from '../images/kasa_portfolio.PNG';
import imgNotion from '../images/notionFront.PNG';
import Header from '../components/Header';

function LandingPage(){
    return(
        <div className='landing'>
            <Header version={true}/>
            <h1>Votre developpeur web <span className='fullstack'>&lt;<AnimatedText />&gt;</span></h1>
            
            <Holder />
            <section id='service'>
                <h2 className='marge'>Mes Services</h2>
                <div className='services'>
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
                    <Service 
                    backgroundColor='3'
                    text='Compatible tous supports, tablette & application mobile.' 
                    img={ico_resp}
                    titre='Responsive design'
                    />
                </div>
            </section>
            <Apropos />
            <section className='project-section'>
                <h2>Mes Projets</h2>
                <div className='project-list'>
                    <div className='project-list-left'>
                        <Project
                        version={1}
                        imgProjet={imgGrimoire}
                        color={"#DFDFFB"}
                        technos={['<Node.js>','REST','MongoDB']}
                        date={'juin 2024'}
                        titre={'Mon vieux Grimoire'}
                        text={'Un projet de back-end développé pour apprendre Node.js, Express, et MongoDB. Il permet de gérer une collection de livres via une API RESTful.'}
                        />
                        <div className='project-list-rond'>
                            <a className='rond-projet' href='#contact'><span className='rond-projet-text'>Alors, on se <br></br>contacte ?</span></a>
                            <span className='rond-projet-droite'>
                            <Project
                            version={2}
                            imgProjet={imgNotion}
                            color={'#DFF0E8'}
                            technos={['React','Sass']}
                            date={'Juin 2024'}
                            titre={'Kasa'}
                            text={"Un projet front-end développé pour apprendre React , permettant de créer et gérer l'interface utilisateur d'un site de location immobilière."}
                            />
                            </span>
                        </div>
                    </div>
                    <div className='project-list-right'>
                    <Project
                    imgProjet={imgKasa}
                    version={3}
                    color={'#EFE8FE'}
                        technos={['React', 'Sass']}
                        date={'Juin 2024'}
                        titre={'Kasa'}
                        text={"Un projet front-end développé pour apprendre React , permettant de créer et gérer l'interface utilisateur d'un site de location immobilière."}
                        />
                    </div>
                </div>
            </section>
            <Question />
            <section className='contact' id='contact'>
                <h2 className='marge'>Contact</h2>
                <div className='div-contact'>
                    <ContactInfo />
                    <ContactForm />
                </div>
            </section>
            
        </div>
    )
};

export default LandingPage;