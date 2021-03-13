//import logo from './logo.svg';
//import './App.css';
import React, {useState} from 'react'; //7. but first we need to import the "useState" hook
import ToDoList from './components/ToDoList';

function App() {
  
  //6. in order to use "state" in a fct component, we need to use the "useState" hook.
  
  /*8. now we can call the useState() fct, and we want to pass it our default state.
  for our to-do elements, it's an empty array. so everytimme our App loads, it's going to use an empty array of to-do elements*/
  //useState([])

  //9. then we've to set "useState([])" to a variable
  //const useState([])

  //10. useState() actually returns an array. so we can destructure this array and set it equal to "useState".
  //const [] = useState([])

  //11. toDoElements: the to-do elements, setToDo: fct that update the to-do elements
  //const [toDoElements, setToDoElements] = useState([])

  //12. pass some data to "useState"
  const [toDoElements, setToDoElements] = useState(["shop", "clean car"])
  
  return (
    <React.Fragment> {/*4. wrap the JSX expressions that we want to return, with a "React.Fragment" tag*/}
        <ToDoList toDoElementsList = {toDoElements}/> {/*1. "ToDoList" is the 1st element that we want to render in our app*/}
        {/*13. we 've a prop called "toDoElementsList" in the "ToDoApp",
        and we pass the "toDoElements" var to this prop.
        we pass props just like we pass an attribute to an HTML element*/}

        <input type="text" /> {/*3. add an input field to be able to add a to-do*/}
        <button> Add a to-do</button> {/*5. add a button*/}
        <button> Clear </button> {/*6. add another button*/}
        <div> 0 left to do</div> {/*4. add button*/}
        {/*5. set up the state of our app:
        React manages the state inside of our app, and when this state changes, it re-renders the components that have changed.
        We want to store all the to-do elements inside of a "state", so we can actually render them.
        So everytime we add, change or delete a to-do element, React 'll re-render the component tree*/}
    </React.Fragment>
  );
}

export default App;
