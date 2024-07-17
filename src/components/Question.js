import Collapsible from "./Collapsible";

function Question(){
    return(
        <section className="question">
            <h3>Vos questions</h3>
            <div>
                <Collapsible className="collapse-impair collapse-haut"
                title="Quelle est le salaire d'un developpeur fullstack ?"
                text="Lorem ipsum dolor sit amet consectetur. Imperdiet aliquam lacus nulla nisi nullam non. Neque malesuada amet tellus dui ut feugiat libero gravida habitant. Eget amet dignissim mi lorem lorem senectus vel ridiculus. Est urna elementum at adipiscing interdum nec ultricies gravida. Id vitae urna vitae tortor. Morbi enim id vitae turpis. Metus dolor pellentesque risus sagittis. Quis odio scelerisque ac arcu sit dictumst massa sed."
                />
                <Collapsible className="collapse-pair"
                title="Quelle est le salaire d'un developpeur fullstack ?"
                text="Lorem ipsum dolor sit amet consectetur. Imperdiet aliquam lacus nulla nisi nullam non. Neque malesuada amet tellus dui ut feugiat libero gravida habitant. Eget amet dignissim mi lorem lorem senectus vel ridiculus. Est urna elementum at adipiscing interdum nec ultricies gravida. Id vitae urna vitae tortor. Morbi enim id vitae turpis. Metus dolor pellentesque risus sagittis. Quis odio scelerisque ac arcu sit dictumst massa sed."
                />
                <Collapsible className="collapse-impair"
                title="Quelle est le salaire d'un developpeur fullstack ?"
                text="Lorem ipsum dolor sit amet consectetur. Imperdiet aliquam lacus nulla nisi nullam non. Neque malesuada amet tellus dui ut feugiat libero gravida habitant. Eget amet dignissim mi lorem lorem senectus vel ridiculus. Est urna elementum at adipiscing interdum nec ultricies gravida. Id vitae urna vitae tortor. Morbi enim id vitae turpis. Metus dolor pellentesque risus sagittis. Quis odio scelerisque ac arcu sit dictumst massa sed."
                />
                <Collapsible className="collapse-pair collapse-bas"
                title="Quelle est le salaire d'un developpeur fullstack ?"
                text="Lorem ipsum dolor sit amet consectetur. Imperdiet aliquam lacus nulla nisi nullam non. Neque malesuada amet tellus dui ut feugiat libero gravida habitant. Eget amet dignissim mi lorem lorem senectus vel ridiculus. Est urna elementum at adipiscing interdum nec ultricies gravida. Id vitae urna vitae tortor. Morbi enim id vitae turpis. Metus dolor pellentesque risus sagittis. Quis odio scelerisque ac arcu sit dictumst massa sed."
                />

            </div>
        </section>
    )
};

export default Question;