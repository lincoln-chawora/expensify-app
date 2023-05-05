import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
            <NavLink to="/create" activeClassName="active">Create expense</NavLink>
            <NavLink to="/help" activeClassName="active">Help</NavLink>
        </nav>
    </header>
)

export default Header;