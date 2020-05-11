import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
    // Makes the Header a Higher-order component

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" style={{ borderRadius: "unset", height: "62px" }}>
                <a className="brand" href="/"><h2>Indelible Interactive</h2></a>
                <a className="logout" href="#">Logout</a>
            </nav>
            {children}
        </div>
    )

    // return (
    //     <div>
    //         {/* a href refresh the entire inner state */}
    //         <h3 style={style}><a href="/">Home</a></h3>
    //         <h3 style={style}><a href="/jokes">Jokes</a></h3>
    //     </div>
    // )
}

export default Header;