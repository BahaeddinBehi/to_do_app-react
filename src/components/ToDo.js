//17. create a "ToDo" component
import React from 'react';
import ToDoList from './ToDoList';

export default function ToDo({ toDoElement }) { //18. pass a to-do element
    return (
        <div> 
            {toDoElement} {/*21. print out the to-do element*/}
        </div>
    )
}
