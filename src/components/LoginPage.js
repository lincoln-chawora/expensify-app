import React from "react";
import {startLogin} from "../actions/auth";
import {connect} from "react-redux";

export const LoginPage = ({ startLogin }) => (
    <div>
        Welcome to Expensify!

        <div>
            Login / Signup now
            <button onClick={startLogin} >Login</button>
        </div>
    </div>
);
const  mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)

