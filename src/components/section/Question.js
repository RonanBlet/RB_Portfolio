import Collapsible from "../Collapsible";

function Question(){
    return(
        <section className="question">
            <h3>Vos questions</h3>
            <div>
                <Collapsible className="collapse-impair collapse-haut"
                title="Combien de temps mettez-vous à répondre aux demandes ?"
                >
                    <span>Si je suis noté comme disponible, je m’engage à vous répondre dans les 48 h.</span>
                </Collapsible>
                <Collapsible className="collapse-pair"
                title="Combien coutent vos services ?"
                >
                    <p>
                    Évaluer le coût de mes services à l'avance peut être complexe, car il varie en fonction de la quantité de travail et des spécificités de chaque projet. Je vous encourage donc à me communiquer votre budget et les détails de votre demande. Cela me permettra de vous fournir une estimation précise et de répondre à vos besoins de manière optimale.
                    </p>
                </Collapsible>
                <Collapsible className="collapse-impair"
                title="Puis-je vous voir en présentiel ?"
                >
                    <p>
                    Contactez-moi ! Je suis basé à Dijon mais je suis disponible pour me déplacer et discuter de votre projet.
                    </p>
                </Collapsible>
                <Collapsible className="collapse-pair collapse-bas"
                title="Êtes-vous designer ?"
                >
                    <p>
                    Je ne suis pas designer, mais je serais ravi de vous mettre en relation avec des professionnels qualifiés dans ce domaine.
                    </p>
                </Collapsible>

            </div>
        </section>
    )
};

export default Question;