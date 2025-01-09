import React from 'react'
import {useState} from 'react'
import NoContent from './NoContent'

const ToDoForm = ({addTodo}) => {

    const [value, setValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if(value.trim() === '' || value.length <= 5){
          setErrorMessage('Please put a proper task!')
        }
        else
       {
         addTodo(value)
         setErrorMessage('    ')
        }
        setValue("")
    }
    const handleChange = e =>{
      setValue(e.target.value)
      setErrorMessage('     ')
     }



  return (
    <><form className='todo-form' onSubmit={handleSubmit}>
      
        <input className='todo-input'  value={value}
        type='text' placeholder='What is the task for today?' onChange={handleChange}/>
        <button className='todo-btn' type='submit'>ADD TASK</button>
        
    </form>
      {value === ''? (<NoContent errorMessage={errorMessage}/>): (<NoContent errorMessage={errorMessage}/>)}  
    </>
  )
}

export default ToDoForm
