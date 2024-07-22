import React, { useState} from 'react';
import Project from './Project';
import ProjectDetail from './ProjectDetail';
import imgGrimoire from '../../images/bookie_portfolio.webp';
import imgKasa from '../../images/kasa_portfolio.webp';
import imgNotion from '../../images/notionFront.webp';
import imgNotion_2 from '../../images/notionFront.webp'
import imgNotionveille from '../../images/notion2.webp'
import imgGrimoire_haut from '../../images/bookie1.webp';
import imgGrimoire_bas from '../../images/bookie2.webp';
import imgKasa_haut from '../../images/kasa1.webp';
import imgKasa_bas1 from '../../images/kasa3.webp';


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
                                technos={['Scrum','Veille']}
                                date={'Juin / Juillet 2024'}
                                titre={'Menu Maker'}
                                text={"Un projet pour apprendre à planifier le dévellopement d'un site web full stack, grâce a une veille technologique et la méthode Agile. "}
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
                            date={'Mai / Juin 2024'}
                            titre={'Kasa'}
                            text={"Un projet front-end développé pour apprendre React , permettant de créer et gérer l'interface utilisateur d'un site de location immobilière."}
                            />
                        </div>
                    </div>

                    <ProjectDetail 
                    lien={true}
                    github="https://github.com/RonanBlet/OC-Projet-6"
                    titre="Mon vieux grimoire" 
                    color='#DFDFFB'
                    onScreen={selected} 
                    back={back} 
                    version={selectedProject} 
                    imageHaut={imgGrimoire_haut}
                    imageBas={imgGrimoire_bas}
                    id={1}
                    description="Mon vieux grimoire est un site de notation de livres
                    que j'ai développé en utilisant des technologies modernes pour offrir
                    une plateforme fluide et sécurisée pour les utilisateurs souhaitant
                    évaluer et partager leurs critiques littéraires. Le projet comprend une
                    API RESTful pour la gestion des utilisateurs, des livres, et des notes,
                    ainsi qu'un système d'authentification sécurisé. Les données sont stockées
                    dans une base de données MongoDB."
                    prob="J'ai sécurisé l'application web pour les connexions des utilisateurs et leurs interactions avec la base de données en utilisant JWT et en mettant en place des stratégies de gestion de tokens pour protéger les données sensibles. J'ai également mis en œuvre des contrôles rigoureux pour l'authentification et l'autorisation des utilisateurs. Pour garder une application optimisée malgré les nombreuses images stockées et affichées, j'ai utilisé sharp pour modifier et optimiser les images. Cette approche a permis de réduire la taille des fichiers tout en conservant une qualité visuelle élevée, améliorant ainsi les performances globales de l'application. La gestion des erreurs et la validation des données entrantes ont été assurées par l'intégration d'une gestion des erreurs robuste avec des messages d'erreur clairs. Le développement a été réalisé en adéquation avec le travail préparé en frontend en suivant rigoureusement les documents fournis en amont et en s'adaptant en cas d'erreur."
                    comp="Développement backend avec Node.js et MongoDB, Sécurisation des applications avec JWT, Optimisation des images avec sharp, Gestion des performances des API et validation des données."
                    />  

                    <ProjectDetail 
                    lien={false}
                    titre="Menu Maker" 
                    color='#DFF0E8'
                    onScreen={selected} 
                    back={back} 
                    version={selectedProject} 
                    imageHaut={imgNotion_2}
                    imageBas={imgNotionveille}
                    id={2}
                    comp="Veille technologique, Gestion de projet Agile avec le cadre Scrum, Rédaction professionnelle de documents de spécifications techniques, Analyse et choix des hébergeurs en fonction des besoins du projet"
                    prob="J'ai choisi les technologies adaptées aux besoins du projet et aux tendances actuelles après avoir réalisé une veille technologique exhaustive pour identifier les meilleures options disponibles. La gestion du projet a été optimisée par une organisation claire, découpant le travail en tâches définies selon le cadre Scrum. Pour garantir une exécution efficace et le respect des délais, un backlog de produit a été créé et des priorités ont été définies. Concernant les hébergeurs pour le front, le back-end, et la base de données, une étude approfondie des offres a été effectuée. Cette analyse a permis de comparer les performances, les coûts et les capacités d'expansion pour sélectionner une infrastructure robuste et évolutive. Enfin, un document de spécification technique complet et professionnel a été rédigé en appliquant les standards de rédaction technique pour garantir une documentation claire et précise."
                    description="Menu Maker est un site dédié à la création de menus pour restaurateurs. Mon rôle dans ce projet a consisté à préparer le travail en amont, en effectuant une veille technologique approfondie pour choisir les meilleures solutions techniques. J'ai également découpé le projet en tâches spécifiques suivant le cadre de travail Scrum, assurant une gestion agile et efficace du développement."
                    />

                    <ProjectDetail 
                    lien={true}
                    github="https://github.com/RonanBlet/OC_Projet_5"
                    titre="Kasa" 
                    color='#EFE8FE'
                    onScreen={selected} 
                    back={back} 
                    version={selectedProject} 
                    imageHaut={imgKasa_haut}
                    imageBas={imgKasa_bas1}
                    description="J'ai développé le frontend de Kasa, un site de location immobilière, utilisant React et Sass. Le site
                    comprend une page d'accueil répertoriant tous les logements
                    disponibles, une page à propos contenant les informations les plus importantes,
                    ainsi qu'une page de description dédiée pour
                    chaque logement. Le site est entièrement responsive et dynamique,
                    assurant une expérience utilisateur optimale sur tous
                    les types d'appareils, et permettant la modification des logements et de leurs informations."
                    comp="Maitrise de React, Routing avec React Router, Stylisation avec Sass, Optimisation et Performance, Responsive Design"
                    prob="Afin de garantir une navigation fluide entre la page d'accueil et les pages de description de chaque logement tout en gérant les URL dynamiques, j'ai utilisé React Router pour créer des routes dynamiques et gérer leurs paramètres, permettant ainsi d'extraire les informations spécifiques à chaque logement. L'interface utilisateur a été conçue pour être cohérente et responsive en utilisant Sass, qui a permis de structurer le CSS de manière modulaire avec des media queries, assurant une adaptation optimale aux différentes tailles d'écran. La gestion de l'état de l'application a été optimisée avec les hooks de React, tels que useState et useEffect, facilitant ainsi la gestion des données et des effets de bord pour afficher les informations des logements de manière efficace."
                    id={3}/>                                 
               </div>
                
            </section>
  );
};

export default ProjetSection;