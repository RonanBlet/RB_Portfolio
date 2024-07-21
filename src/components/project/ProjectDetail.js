import next from '../../images/next.svg'


function ProjectDetail({titre,github,lien,onScreen,color, back, version, id, imageHaut, imageBas, description,prob,comp}){

    const projetColor = {
        backgroundColor: color
      };

    const isOnScreen = (version === id) && onScreen;

    return(
        <div style={projetColor} className={`project-detail ${isOnScreen ? 'project-detail-onScreen' : ''}`}  itemScope itemType='https://schema.org/CreativeWork'>
            <h3 itemProp='name'>{titre}</h3>
            <img className='project-detail-back' src={next} alt='fleche' onClick={back}/>
            <div className='project-detail-text'>
                <p itemProp='description'>
                    {description}
                 </p>
                <img className='project-detail-img' src={imageHaut} alt="capture d'écran du projet"/>
                <p>
                    {prob}
                </p>
                <img src={imageBas} alt='capture d écran du projet'/>
                <span className='project-detail-text-titre'>Compétences travaillées :</span>
                <p>{comp}</p>
                {lien && <a href={github} itemProp='url'>Lien vers GitHub</a>}
            </div>
        </div>
    )
};

export default ProjectDetail;