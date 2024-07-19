import imgNotion from '../../images/notionFront.PNG'
import next from '../../images/next.svg'


function ProjectDetail({titre,onScreen, back, version, id}){

    const isOnScreen = (version === id) && onScreen;

    return(
        <div className={`project-detail ${isOnScreen ? 'project-detail-onScreen' : ''}`} >
            <img className='project-detail-back' src={next} alt='fleche' onClick={back}/>
            <img className='project-detail-img' src={imgNotion} alt="capture d'écran du projet"/>
            <h3>{titre}</h3>
            <div className='project-detail-text'>
                <p>In collaboration with my brother Matthieu Walterspieler, we embarked on a fullstack project for Etxea Capital, an independent asset management company providing personalized investment solutions tailored to both institutional and private clients. Our objective was to develop a comprehensive platform that would help Etxea Capital manage its properties, engage with subscribers, forecast returns, streamline administrative procedures, and more.</p>
                <p>Leveraging the power of TurboRepo and Next.js for the web application, paired with a robust Nest.js backend, we delivered a solution that encapsulates efficiency and functionality. The platform we built offers an array of features designed to enhance operational efficiency and client satisfaction. It enables Etxea Capital to effectively manage their property portfolio, track subscriber engagement, accurately forecast returns, and seamlessly execute administrative tasks.</p>
            </div>
            <div className='project-detail-down'>   

            </div>
        </div>
    )
};

export default ProjectDetail;