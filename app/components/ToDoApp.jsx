var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var TodoSearch = require('TodoSearch');

var ToDoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Learn ReactJS'
                },
                {
                    id: 4,
                    text: 'Create React World Clock app'
                },
                {
                    id: 5,
                    text: 'Plan to learn Node.js'
                }
            ]
        };
    },
    handleAddToDo: function (text) {
        alert('new todo: ' + text);
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