import React from "react";
import { connect } from "react-redux";

import TodoItem from "../components";
import { deleteTodo } from "../actions";

class TodoList extends React.Component {
    render() {
        const { todos, deleteTodo } = this.props;

        return (
            <ul>
                {todos.map(({ id, content }) => (
                    <TodoItem
                        key={id}
                        id={id}
                        content={content}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
