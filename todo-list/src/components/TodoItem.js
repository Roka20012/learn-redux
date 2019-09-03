import React from "react";

export default ({ id, content, deleteTodo }) => (
    <li>
        {content}{" "}
        <span
            style={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={() => deleteTodo(id)}
        >
            [x]
        </span>
    </li>
);
