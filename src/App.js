import { useState } from 'react';
import './App.css';

function App() {

  const[toDos, setToDos] = useState([]);
  const[elementName, setElementName] = useState('');

  function handleAdd(e, name) {
    e.preventDefault();
    console.log('add', name);

  }

  return (
    <div className='app-container'>
      <h2>To Do</h2>
      <AddToDo 
        add={handleAdd}
        element={elementName}
      />
      <hr className='line-divider'/>
      <ToDoList 
        todos={toDos}
      />
      <hr className='line-divider'/>
      <DoneList 
        todos={toDos}
      />
    </div>
  );
}

function ToDoList() {
  return (
    <div className='list-container'>
      To Do
    </div>
  )
}

function DoneList() {
  return (
    <div className='list-container'>
      Done
    </div>
  )
}

function AddToDo(props) {

  const[toDoName, setToDoName] = useState('');

  return (
    <>
    <form onSubmit={(e, toDoName)=>props.add(e, toDoName)}>
      <input type="text" onChange={(e) => setToDoName(e.target.value)}/>
      <button type="submit">Add something To Do</button>
    </form>
    </>
  )
}

function Element() {
  return (
    <div className='element-container'>
     <h3></h3>
     <input type="checkbox"/>
     <p>del</p>
    </div>
  )
}


export default App;
