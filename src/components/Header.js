import React from "react";
import {NavLink} from "react-router-dom";
import {startLogout} from "../actions/auth";
import {connect} from "react-redux";

export const Header = ({ startLogout }) => (
    <header className="container main-header">
        <h1>
            <NavLink to="/dashboard" activeClassName="active">Expensify</NavLink>
        </h1>
        <nav>
            <button onClick={startLogout}>Logout</button>
        </nav>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header);