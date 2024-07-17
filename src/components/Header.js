import logo from '../images/logo.png';

function Header({version}){
    return(
        <header>
            <img src={logo} alt="Logo"/>
            {version && <p>Hey, je suis Ronan Blet</p>}
            {!version && <h1>A Propos</h1>}

            <div class="menu-icon">
            <input class="menu-icon__cheeckbox" type="checkbox" />
                <div>
                    <span></span>
                    <span></span>
                </div>
	</div>
        </header>
    )
};

export default Header;