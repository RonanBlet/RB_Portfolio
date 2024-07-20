import Collapsible from "./Collapsible";

function Question(){
    return(
        <section className="question">
            <h3>Vos questions</h3>
            <div>
                <Collapsible className="collapse-impair collapse-haut"
                title="Combien de temps pour obtenir une réponse ?"
                >
                    <span>Je m'engage à vous répondre dans les 48h.</span>
                </Collapsible>
                <Collapsible className="collapse-pair"
                title="Je ne possède pas exactement les bonnes compétences ?"
                >
                    <p>
                    Je serai ravi de m'adapter et de travailler pour vous fournir un travail de qualité professionnelle.
                    </p>
                </Collapsible>
                <Collapsible className="collapse-impair"
                title="Vous souhaitez me voir en présentiel ?"
                >
                    <p>
                    Contactez-moi ! Je suis basé à Dijon mais je suis disponible pour me déplacer et discuter de votre projet.
                    </p>
                </Collapsible>
                <Collapsible className="collapse-pair collapse-bas"
                title="Quel prix pour mes prestations ?"
                >
                    <p>
                    Je m'engage à fournir un prix en adéquation avec mon expérience, la charge de travail et votre budget.
                    </p>
                </Collapsible>

            </div>
        </section>
    )
};

export default Question;