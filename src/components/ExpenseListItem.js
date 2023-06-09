import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import numeral from "numeral"
import locales from "numeral/locales/en-gb"

numeral.locale('en-gb');

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div className="expenses-list--item">
        <div>
            <h3><Link to={"/edit/" + id}>{description}</Link></h3>
            <small>{moment(createdAt).format('Do MMMM YYYY')}</small>
        </div>
        <strong>{numeral(amount / 100).format('$0,0.00')}</strong>
    </div>
)

export default ExpenseListItem;