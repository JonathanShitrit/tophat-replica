import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
    // Makes the Header a Higher-order component

    const logout = () => {
        window.localStorage.clear();
        window.location.reload(true);
    }

    return (
        // <div>
        //     <header id="nav" class="sticky-nav">
        //         <nav class="w-container">
        //             <ul role="list" class="nav-grid w-list-unstyled">
        //                 <li id="w-node-61b5706c8d5c-4b7a5adf"> <a href="#" class="nav-link"> Indelible Interactive </a></li>
        //                 <li> <a href="#" class="nav-link">Features</a></li>
        //                 <li> <a href="#" class="nav-link">Pricing</a></li>
        //                 <li> <a href="#" class="w-button">Logout</a></li>
        //             </ul>
        //         </nav>
        //     </header>
        //     {children}
        // </div>

        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" style={{ borderRadius: "unset", height: "62px" }}>
                <a className="brand" href="/"><h2>Indelible Interactive</h2></a>
                <a className="logout" onClick={logout} href="#">Logout</a>
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