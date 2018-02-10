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
                    text: 'Walk the dog'
                },
                {
                    id: uuid(),
                    text: 'Clean the yard'
                },
                {
                    id: uuid(),
                    text: 'Learn ReactJS'
                },
                {
                    id: uuid(),
                    text: 'Create React World Clock app'
                },
                {
                    id: uuid(),
                    text: 'Plan to learn Node.js'
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
                    text: text
                }
            ]
        });
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
                <ToDoList todos={todos}/>
                <AddToDo onAddTodo={this.handleAddToDo}/>
            </div>
        )
    }
});

module.exports = ToDoApp;