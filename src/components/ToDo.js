//17. create a "ToDo" component
import React from 'react';


export default function ToDo({ toDoElement }) { //18. pass a to-do element
    return (
        <div>
            <label>
                <input type="checkbox" checked={toDoElement.complete} /> {/*24. we add a checkbox input with a "isChecked" property*/}
                {toDoElement.name} {/*21. print out the to-do element*/}
            </label> 
        </div>
    )
}
