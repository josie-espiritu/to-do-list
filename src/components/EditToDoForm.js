import React from 'react'
import {useState} from 'react'
import NoContent from './NoContent'

const EditToDoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task)
    const [errorMessage,setErrorMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        // console.log(value)
        if(value.trim() === ''){
          setErrorMessage('Please put something meaningful!')
        }
        else
       {
        editTodo(value, task.id)
         setErrorMessage('    ')
         setValue("")
        }
    }
    const handleChange = e =>{
      setValue(e.target.value)
      setErrorMessage('     ')
     }




  return (
    <><form className='todo-form' onSubmit={handleSubmit}>
        <input className='todo-input'  value={value}
        type='text' onChange={handleChange}/>
        <button className='todo-btn' type='submit'>UPDATE</button>
    </form>
    {value === ''? (<NoContent errorMessage={errorMessage}/>): (<NoContent errorMessage={errorMessage}/>)}  
    </>
  )
}

export default EditToDoForm
