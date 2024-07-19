import next from '../images/next.svg'
import video from '../images/video.mp4'

function Holder(){

    return(
        <div className="holder">
            <video src={video} autoPlay loop muted/>
            <div className='holder-up'>
            </div>
            <div className="holder-down">
                <span className='holder-down-left'>
                    <p>Freelance Développeur Fullstack<br></br>
                    Basé sur Dijon</p>
                </span>
                <span className='holder-down-right'>
                    <span className='holder-lien'>
                        <a className="dispo" href='#contact'><span className='holder-green-dot'></span>Disponible</a>
                    </span>
                    <span className="bouton-dispo">
                        <a href='#service'>
                            <img src={next} alt='fleche'/>
                        </a>
                    </span>
                </span>
                
            </div>
        </div>
    )
};

export default Holder;