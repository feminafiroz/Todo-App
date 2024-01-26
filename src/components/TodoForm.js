import React,{useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setValue]=useState("")

    const handleSubmit = e =>{
        e.preventDefault();//to prevent a page reload
        addTodo(value);//passed as a prop, is called with the current value of the value
        setValue("")//to clear the value in the text box after the submisision so we enter empty string ,so it will immdetily bring the empty string to the text box ,so it look like blank .
    }
  return (
    <form className="TodoForm" onSubmit ={handleSubmit}>
        <input type="text" className="todo-input" value ={value} placeholder = 'what is the task today ?' onChange = {(e)=>setValue(e.target.value)} />
        <button type="submit" className ='todo-btn'>Add task</button>
    </form>
  )
}

export default TodoForm
