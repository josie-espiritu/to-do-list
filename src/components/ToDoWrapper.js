import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
import EditToDoForm from './EditToDoForm'
uuidv4()

const ToDoWrapper = () => {
    const [todos,setTodos] = useState([])

    const addTodos = todo =>{
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEdited: false}])
        // console.log(todos)
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo))
    }

    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEdited: !todo.isEdited}: todo))
    }

    const editTask = (task, id) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEdited: !todo.isEdited}: todo))
    }

    
  return (
    <div className='to-do-wrapper'>
        <h1>To Do List</h1>
      <ToDoForm addTodo={addTodos}/>
      <hr />
      {todos.map((todo, index) =>(
            todo.isEdited ? (<EditToDoForm editTodo={editTask} task={todo} key={index}/>): (
        <Todo task={todo} index={index} toggleComplete={toggleComplete}
        deleteTodo = {deleteTodo} 
        editTodo = {editTodo}/>)
      ))}

      <h3 style={{
        textAlign: 'center'
      }}>number of tasks: {todos.length} </h3>
    </div>
  )
}

export default ToDoWrapper
