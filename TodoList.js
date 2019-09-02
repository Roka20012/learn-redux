import React from "react";
import { connect } from "react-redux";

import TodoItem from "../components";

class TodoList extends React.Component {
    render() {
        const { todos } = this.props;
        return (
            <ul>
                {todos.map(({ id, content }) => (
                    <TodoItem key={id} content={content} />
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
