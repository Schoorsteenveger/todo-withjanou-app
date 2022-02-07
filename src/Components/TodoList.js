import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {


    return (

        // <div>
        //     {todos.map(todo => {
        //         return (
        //             <Todo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
        //         )
        //     })}

        //     <button onClick={handleFilter}>Clear Completed</button>
        // </div>

        <div>
            <div className='todo-container'>
                <ul className='todo-list'>
                    {filteredTodos.map(todo => (
                        <Todo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>
                    ))}




                </ul>
            </div>
        </div>
    );
};

export default TodoList;
