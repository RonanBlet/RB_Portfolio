import { useState } from "react";

function Collapsible({title, children, className}){
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
    setIsOpen(!isOpen);
    };

    return(
        <div className={`collapse ${className}`}>
            <div className="collapse-button" onClick={toggleCollapsible}>
                <span className="collapse-title">
                    {title} 
                </span>
                <span className={`toggle-icon ${isOpen ? 'toggle-icon-open' : ''}`}></span>
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : ''} ${className}` }>
                <div className="collapse-text">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Collapsible;