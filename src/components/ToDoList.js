//2.  create a "ToDoList" component
import React from 'react';
import ToDo from './ToDo'; //19. import "ToDo" component


export default function ToDoList({ toDoElementsList }) { {/*14. pass the prop to the fct*/}
    return (
        <div>
            <div>
                {"You have "+ toDoElementsList.length +" things to do:"} {/*15. returns the number of "toDoElements" in the "toDoElementsList" */}
                {/*16. we want to print each of to-do element. we can do that by mapping our list "toDoElementsList" and return actual "toDoElements".
                so first let's create a "ToDo" component.*/}
            </div>
            <div>
                {/*20. map over all our to-do elements and return a to-element */}
                {toDoElementsList.map( element => {
                    return <ToDo toDoElement={element} />
                    })
                }
            </div>
        </div>
    )
}
