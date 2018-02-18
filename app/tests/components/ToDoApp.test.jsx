var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
    it('should exist', () => {
        expect(ToDoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'Test Add';
        var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddToDo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);

        // Expect createdAt to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'Test Features',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };
        var todoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

        todoApp.setState({todos: [todoData]});

        // check that todos first item has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(false);
        // call handleToggle with 11
        todoApp.handleToggle(11);
        // verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(true);

        //todoApp.handleToggle(11);
        // Expect completedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    // Test that when toggle from true to false, completedAt get removed
    it('should toggle todo from completed to incomplete', () => {
        var todoData = {
            id: 11,
            text: 'Test Features',
            completed: true,
            createdAt: 0,
            completedAt: 123
        };
        var todoApp = TestUtils.renderIntoDocument(<ToDoApp />);

        todoApp.setState({ todos: [todoData] });

        // check that todos first item has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(true);
        // call handleToggle with 11
        todoApp.handleToggle(11);
        // verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(false);

        //todoApp.handleToggle(11);
        // Expect completedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });    
});