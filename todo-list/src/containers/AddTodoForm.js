import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

class AddTodoForm extends React.Component {
    todoInput = React.createRef();

    componentDidMount() {
        this.todoInput.current.focus();
    }

    render() {
        const { addTodo } = this.props;

        return (
            <form
                action="#"
                onSubmit={e => {
                    e.preventDefault();
                    addTodo(this.todoInput.current.value);
                    this.todoInput.current.value = "";
                    this.todoInput.current.focus();
                }}
            >
                Todo: <input type="text" required ref={this.todoInput} />
                <button>AddTodo</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo: value => dispatch(addTodo(value))
});

export default connect(
    null,
    mapDispatchToProps
)(AddTodoForm);
