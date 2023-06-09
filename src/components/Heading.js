import React from "react";

const Heading = ({ title, summary }) => (
    <div className="heading">
        <div className="container">
            <h1>{ title }</h1>

            {
                summary && (
                    <div className="summary">{ summary }</div>
                )
            }
        </div>
    </div>
)

export default Heading
