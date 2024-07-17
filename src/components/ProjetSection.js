import React, { useState} from 'react';
import Project from './Project';
import ProjectDetail from './ProjectDetail';
import imgGrimoire from '../images/bookie_portfolio.PNG';
import imgKasa from '../images/kasa_portfolio.PNG';
import imgNotion from '../images/notionFront.PNG';

function ProjetSection(){


    const [selectedProject, setSelectedProject] = useState(null);
    const [selected, setSelected] = useState(false);

    const handleProjetClick = (version) => {
        setSelectedProject(version)
        setSelected(true);
      };

    const back = () => {
        setSelected(false);
    }

  return (
    <section className='project-section' id='projet'>
                <h2>Mes Projets</h2>
                <div className='project-div'>
                    <div className={`project-list ${selected ? 'project-list-offScreen' : ''}`}>
                        <div className='project-list-left'>
                            <Project onClick={handleProjetClick}
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
                                <Project onClick={handleProjetClick}
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
                        <Project onClick={handleProjetClick}
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

                    <ProjectDetail 
                    titre="Mon vieux grimoire" 
                    onScreen={selected} 
                    back={back} 
                    version={selectedProject} 
                    id={1}/>  

                    <ProjectDetail 
                    titre="Kasa" 
                    onScreen={selected} 
                    back={back} 
                    version={selectedProject} 
                    id={2}/>

                    <ProjectDetail 
                    titre="Notion" 
                    onScreen={selected} 
                    back={back} 
                    version={selectedProject} 
                    id={3}/>                                 
               </div>
                
            </section>
  );
};

export default ProjetSection;