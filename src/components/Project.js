import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import imgKasa from '../images/kasa_portfolio2.PNG';

function Project({technos, date, titre, text, color, version,imgProjet}){

    const projetColor = {
        backgroundColor: color
      };

    return(
        <div className="project" style={projetColor}>
            <img className={`project-img-${version}`} src={imgProjet} alt='Site de notation de livre'/>
            { version === 3 && (
                <img className='project-img-4' src={imgKasa} alt='site de location immobilière' />
            )}
            <div className='project-techno'>
                {technos.map((techno, index) =>(
                    <span key={index} className={`techno-${index} techno`}>{techno}</span>
                ))}
            </div>
            <div className='project-down'>
                <p className='project-date'>
                    <span><FontAwesomeIcon icon={faCalendar}/></span>
                    {date}
                    </p>
                <h3>{titre}</h3>
                <p className='project-text'>{text}</p>
            </div>
        </div>
    )
};

export default Project;