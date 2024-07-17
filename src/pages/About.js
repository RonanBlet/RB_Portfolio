import photo from '../images/Gustave.jpg'
import Collapsible from '../components/Collapsible';
import Header from '../components/Header';

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
                <p>Hello!  I'm Thibault Walterspieler, a freelance fullstack engineer based in  Lyon (France), boasting over 5 years of hands-on experience in web  development. Specialised in cutting-edge technologies like TypeScript,  JavaScript, React, or Next.js, I am passionate about crafting scalable,  high-performance web applications that deliver exceptional user  experiences.</p>
                <Collapsible
                title="Qualification et expertise"
                text=""
                />
                <Collapsible
                title="Etudes"
                text=""
                />
                <Collapsible className='collapse-about'
                title="Langues"
                text=""
                />
            </div>
        </div>
        </div>
    )
};

export default About;