import React, { useState} from 'react';
import Project from './Project';
import ProjectDetail from './ProjectDetail';
import imgGrimoire from '../../images/bookie_portfolio.PNG';
import imgKasa from '../../images/kasa_portfolio.PNG';
import imgNotion from '../../images/notionFront.PNG';
import imgNotion_2 from '../../images/notionFront2.PNG'
import imgNotionveille from '../../images/notion2.PNG'
import imgGrimoire_bas from '../../images/bookie1.PNG';
import imgGrimoire_haut from '../../images/bookie2.PNG';
import imgKasa_haut from '../../images/kasa1.PNG';
import imgKasa_bas1 from '../../images/kasa3.PNG';


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
                    comp="Développement backend avec Node.js et MongoDB, Sécurisation des applications avec JWT, Optimisation des images avec sharp, Gestion des performances des API et validation des données."
                    p_1="Garantir une application web sécurisée pour la connexion des utilisateurs et leurs interactions avec la base de données."
                    p_2="Garder une application optimisée malgré les nombreuses images stockées et affichées."
                    s_1="Utilisation de JWT pour sécuriser les endpoints, avec des stratégies de gestion de tokens pour protéger les données sensibles. J'ai également mis en œuvre des contrôles rigoureux pour l'authentification et l'autorisation des utilisateurs."
                    s_2="Utilisation de sharp pour modifier et optimiser les images stockées et affichées sur l'application web. Cette approche a permis de réduire la taille des fichiers tout en conservant une qualité visuelle élevée, améliorant ainsi les performances globales de l'application."
                    p_3="Gérer les erreurs et valider les données entrantes de manière efficace."
                    s_3=" Intégration d'une gestion des erreurs robuste avec des messages d'erreur clairs."
                    p_4="Développement en adéquation avec le travail préparé en Frontend."
                    s_4="Suivi rigoureux des documents fournis en amont avec le frontend et adaptation en cas d'erreur."
                    />  

                    <ProjectDetail 
                    lien={false}
                    titre="Menu Maker" 
                    onScreen={selected} 
                    back={back} 
                    version={selectedProject} 
                    imageHaut={imgNotion_2}
                    imageBas={imgNotionveille}
                    id={2}
                    comp="Veille technologique, Gestion de projet Agile avec le cadre Scrum, Rédaction professionnelle de documents de spécifications techniques, Analyse et choix des hébergeurs en fonction des besoins du projet"
                    p_1="Choix des technologies adaptées aux besoins du projet et aux tendances actuelles."
                    s_1="Réalisation d'une veille technologique exhaustive pour identifier les technologies les plus appropriées."
                    p_3="Organisation et gestion du projet pour une exécution efficace et une livraison dans les délais."
                    s_3="Découpage du projet en tâches claires et définies selon le cadre Scrum. J'ai créé un backlog de produit et défini des prioritées pour assurer une progression fluide et un respect des échéances."
                    p_2=" Choix des hébergeurs pour le front, le back-end, et la base de données"
                    s_2="Étude des hébergeurs disponibles, évaluation de leurs offres et de leur scalabilité en fonction des technologies choisies. J'ai comparé les performances, les coûts et les capacités d'expansion des différents hébergeurs pour garantir une infrastructure robuste et évolutive."
                    p_4="Rédiger un document de spécification technique complet et professionnel"
                    s_4="Apprentissage des standards professionnels pour la rédaction de documents techniques."
                    description="Menu Maker est un site dédié à la création de menus pour restaurateurs. Mon rôle dans ce projet a consisté à préparer le travail en amont, en effectuant une veille technologique approfondie pour choisir les meilleures solutions techniques. J'ai également découpé le projet en tâches spécifiques suivant le cadre de travail Scrum, assurant une gestion agile et efficace du développement."
                    />

                    <ProjectDetail 
                    lien={true}
                    github="https://github.com/RonanBlet/OC_Projet_5"
                    titre="Kasa" 
                    onScreen={selected} 
                    back={back} 
                    version={selectedProject} 
                    imageHaut={imgKasa_haut}
                    imageBas={imgKasa_bas1}
                    description="J'ai développé Kasa, un site de location immobilière, utilisant React et Sass. Le site
                    comprend une page d'accueil répertoriant tous les logements
                    disponibles, une page à propos contenant les informations les plus importantes,
                    ainsi qu'une page de description dédiée pour
                    chaque logement. Le site est entièrement responsive et dynamique,
                    assurant une expérience utilisateur optimale sur tous
                    les types d'appareils, et permettant la modification des logements et de leurs informations."
                    comp="Maitrise de React, Routing avec React Router, Stylisation avec Sass, Optimisation et Performance, Responsive Design"
                    s_1="Utilisation de React Router pour créer des routes dynamiques et implémentation de paramètres de route pour extraire les informations spécifiques à chaque logement."
                    s_2="Utilisation de Sass pour structurer et modulariser le CSS, avec des media queries pour garantir une mise en page responsive. L'utilisation de variables Sass a également simplifié la gestion des styles globaux."
                    s_3="Mise en place du state management avec les hooks de React, notamment useState et useEffect, pour gérer les données et les effets de bord de manière optimale."
                    s_4="Chargement asynchrone des données et utilisation de techniques de code splitting pour améliorer les temps de chargement des pages."
                    p_1="Assurer une navigation fluide entre la page d'accueil et les pages de description de chaque logement tout en gérant les URL dynamiques."
                    p_2="Créer une interface utilisateur cohérente et responsive qui s'adapte à diverses tailles d'écran."
                    p_3="Maintenir et gérer l'état de l'application pour afficher les informations des logements de manière efficace."
                    p_4="Assurer des temps de chargement rapides et une performance optimale malgré le volume de données des logements."
                    id={3}/>                                 
               </div>
                
            </section>
  );
};

export default ProjetSection;