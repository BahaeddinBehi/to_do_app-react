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
                {/*20. map over all our to-do elements and return a "ToDoElement"*/}
                {toDoElementsList.map( element => {
                    return <ToDo key={element.id} toDoElement={element} />
                    /*22. everytime the to-do array changes (toDoElementsList), React is going to render every single to-do element in the array, but we only want to re-render the ones that changed.
                    so we've to set a unique key, that allows React to only re-render the to-do elements that changed.*/
                    })
                }
            </div>
        </div>
    )
}
