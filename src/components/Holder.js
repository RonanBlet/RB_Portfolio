import next from '../images/next.svg'

function Holder(){
    const videoId = '_2aESGhGCmc';

    return(
        <div className="holder">
            <div className='holder-up'>
                <iframe className="holder-up-iframe" 
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&fs=0&rel=0&iv_load_policy=3&mute=1`}
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='3D video'
                />
            </div>
            <div className="holder-down">
                <p>Freelance Développeur Fullstack<br></br>
                Basé sur Dijon</p>
                <div className="dispo"><span className='holder-green-dot'></span>Disponible en Juin</div>
                <span className="bouton-dispo">
                    <a href='#service'>
                        <img src={next} alt='fleche'/>
                    </a>
                </span>
            </div>
        </div>
    )
};

export default Holder;