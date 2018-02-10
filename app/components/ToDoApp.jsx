var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var ToDoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Clean the yard',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Learn ReactJS',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Create React World Clock app',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Plan to learn Node.js',
                    completed: true
                }
            ]
        };
    },
    handleAddToDo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map( (todo) => {
            
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({todos: updatedTodos});
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <ToDoList todos={todos} onToggle={this.handleToggle}/>
                <AddToDo onAddTodo={this.handleAddToDo}/>
            </div>
        )
    }
});

module.exports = ToDoApp;