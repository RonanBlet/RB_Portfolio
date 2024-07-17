import { useState } from 'react';
import { ReactSVG } from 'react-svg'
import logo from '../images/logo.svg';

function Header({version}){
    const[isOpen, setIsOpen] = useState(false);
    const [logoColor, setLogoColor] = useState('#020622');

    const openMenu = () => {
        if(isOpen){
            setIsOpen(false);
            setLogoColor('#020622'); 
            document.body.classList.toggle('menu-body')
        }else{
            document.body.classList.toggle('menu-body')
            setIsOpen(true);
             setLogoColor('white'); 
        }
    
    };



    return(
        <header>
            <div className={`menu-deroulant-un ${isOpen ? 'menu-deroulant-active' : ''}`}></div>
            <div className={`menu-deroulant-deux ${isOpen ? 'menu-deroulant-active' : ''}`}></div>
            <div className={`menu-deroulant-trois ${isOpen ? 'menu-deroulant-active' : ''}`}></div>
            <div className={`menu-deroulant-quatre ${isOpen ? 'menu-deroulant-active' : ''}`}></div>
            <div className={`menu-deroulant-cinq ${isOpen ? 'menu-deroulant-active' : ''}`}></div>
            <div className={`menu-open ${isOpen ? 'menu-open-active' : ''}`}>
                <a href='/#projet' className={`${isOpen ? 'a-active' : ''}` } onClick={openMenu}><span className='menu-open-slash'>/</span><span className='menu-open-text'>MES PROJETS</span></a>
                <a href='about' className={`${isOpen ? 'a-active' : ''}`} onClick={openMenu}><span className='menu-open-slash'>/</span><span className='menu-open-text'>A PROPOS</span></a>
                <a href='/#contact' className={`${isOpen ? 'a-active' : ''}`} onClick={openMenu}><span className='menu-open-slash'>/</span><span className='menu-open-text'>CONTACT</span></a>
            </div>
            <ReactSVG 
            src={logo}
            className='svg-icon'
            style={{color : logoColor}}
            />
            {version && <p>Hey, je suis Ronan Blet</p>}
            {!version && <h1>A Propos</h1>}
            <div class="menu-icon">
                <input class="menu-icon__cheeckbox" type="checkbox" onClick={openMenu}/>
                <div>
                    <span></span>
                    <span></span>
                </div>
	        </div>
        </header>
    );
};

export default Header;