import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
    // Makes the Header a Higher-order component

    const style = {
        display: "inline-block",
        margin: 10,
        marginBottom: 30
    }

    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-light justify-content-center">
                {/* <h3 style={style}><Link to="/">Home</Link></h3>
                <h3 style={style}><Link to="/sign-in">Sign in</Link></h3>
                <h3 style={style}><Link to="/sign-up">Sign up</Link></h3> */}
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