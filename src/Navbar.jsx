import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to={"/"} class="navbar-brand"> Studio Ghibli </Link>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to={"/films"} class="nav-link"> View Films </Link>
                        <Link to={"/people"} class="nav-link"> View People </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;