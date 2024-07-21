import next from '../../images/next.svg'


function ProjectDetail({titre,github,lien,onScreen, back, version, id, imageHaut, imageBas, description,p_1,p_2,p_3,p_4,s_1,s_2,s_3,s_4,comp}){

    const isOnScreen = (version === id) && onScreen;

    return(
        <div className={`project-detail ${isOnScreen ? 'project-detail-onScreen' : ''}`}  itemScope itemType='https://schema.org/CreativeWork'>
            <h3 itemProp='name'>{titre}</h3>
            <img className='project-detail-back' src={next} alt='fleche' onClick={back}/>
            <div className='project-detail-text'>
                <img className='project-detail-img' src={imageHaut} alt="capture d'écran du projet"/>
                <div>
                    <span className='project-detail-text-titre'>Description : </span>
                    <p itemProp='description'>
                        {description}
                    </p>
                    <span className='project-detail-text-titre'>Problématique : </span>
                    <p>
                    <span className='project-detail-text-prob'>Problème : </span> {p_1}
                    </p>
                    <span className='project-detail-text-prob'>Solution : </span>{s_1}
                    <p>
                    <span className='project-detail-text-prob'>Problème : </span>{p_2}</p>
                    <p><span className='project-detail-text-prob'>Solution : </span>{s_2}
                    </p>
                </div>  
                <div>
                    <p><span className='project-detail-text-prob'>Problème : </span>{p_3}</p>
                    <p><span className='project-detail-text-prob'>Solution : </span>{s_3}</p>
                    <p><span className='project-detail-text-prob'>Problème : </span>{p_4}</p>
                    <p><span className='project-detail-text-prob'>Solution : </span>{s_4}</p>
                    <span className='project-detail-text-titre'>Compétences :</span>
                    <p>{comp}</p>
                    {lien && <a href={github} itemProp='url'>Lien vers GitHub</a>}
                </div>
                <img src={imageBas} alt='capture d écran du projet'/>
                
            </div>
        </div>
    )
};

export default ProjectDetail;