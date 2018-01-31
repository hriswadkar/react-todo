var React = require('react');
var ToDoList = require('ToDoList');

var ToDoApp = React.createClass({
    getInitialState: function () {
        return {
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
    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <ToDoList todos={todos}/>
            </div>
        )
    }
});

module.exports = ToDoApp;