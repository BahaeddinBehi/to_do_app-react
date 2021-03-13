//2.  create a "ToDoList" component
import React from 'react';
import ToDo from './ToDo';


export default function ToDoList({toDoElementsList}) { {/*14. pass the prop to the fct*/}
    return (
        <div>
            {toDoElementsList.length} {/*15. returns the number of "toDoElements" in the "toDoElementsList" */}
            {/*16. we want to print each of to-do element. we can do that by mapping our list "toDoElementsList" and return actual "toDoElements".
            we can do that with a "ToDo" component.*/}
        </div>
    )
}
