import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
    // Makes the Header a Higher-order component

    const logout = () => {
        window.localStorage.clear();
        window.location.reload(true);
    }

    return (
        <div>
            <nav className="top-nav">
                <h2 className=""><a href='/'>Indelible Interactive</a></h2>
                <h3 className=""><Link to='/help'>Help</Link></h3>
                <h3 className=""><Link to='/about'>About</Link></h3>
                <h3 className=""><Link to='/contact'>Contact</Link></h3>
                <h3 className="" onClick={logout}><Link to='/'>Logout</Link></h3>
            </nav>
            {children}
        </div>
    )

}

export default Header;