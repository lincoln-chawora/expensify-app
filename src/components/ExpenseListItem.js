import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <h3><Link to={"/edit/" + id}>{description}</Link></h3>
        <p>{amount} - {moment(createdAt).format('Do MMMM YYYY')}</p>
    </div>
)

export default ExpenseListItem;