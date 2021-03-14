//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react'; //10. but first we need to import the "useState" hook
import ToDoList from './components/ToDoList';

function App() {
  
  //9. in order to use "state" in a fct component, we need to use the "useState" hook.
  
  /*11. now we can call the useState() fct, and we want to pass to it, our default state.
  for our to-do elements, it's an empty array. so the 1st time our app loads, it's going to use an empty array of to-do elements, because we still don't have any to-do element.*/
  //useState([])

  //12. then we've to set "useState([])" to a variable
  //const useState([])

  //13. useState() actually returns an array. so we can destructure this array and set it equal to "useState".
  //const [] = useState([])

  //11. the 1st element of the array is all our to-do elements (toDoElements), and the 2nd is a fct that update the to-do elements (setToDo)
  //const [toDoElements, setToDoElements] = useState([])

  //12. pass some data to "useState"
  const [toDoElements, setToDoElements] = useState(["learn React", "take a nap"])
  
  return (
    <React.Fragment> {/*4. wrap the JSX expressions that we want to return, with a "React.Fragment" tag*/}
        <input type="text" /> {/*3. add an input field to be able to add a to-do*/}
        <button> Add something to-do</button> {/*5. add a button*/}
        <button> Clear </button> {/*6. add another button*/}

        <ToDoList toDoElementsList = {toDoElements}/> {/*1. "ToDoList" is the 1st element that we want to render in our app*/}
        {/*13. we 've a prop called "toDoElementsList" in the "ToDoList", and we pass the "toDoElements" variable to this prop.
        we pass props just like we pass an attribute to an HTML element*/}
        
        <div> 0 left to do</div> {/*7. add a div tag*/}

        {/*8. set up the state of our app:
        React manages the state inside of our app, and when this state changes, it re-renders the components that have changed.
        We want to store all the to-do elements inside of a "state", so we can actually render them.
        So everytime we add, change or delete a to-do element, React 'll re-render the component tree*/}
    </React.Fragment>
  );
}

export default App;
