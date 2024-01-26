import React,{useState} from 'react'

const EditTodoForm = ({editTodo,task}) => {
    const [value,setValue]=useState(task.task)

    const handleSubmit = e =>{
        e.preventDefault();//to prevent a page reload
        editTodo(value,task.id);//passed as a prop, is called with the current value of the value
        setValue("")//to clear the value in the text box after the submisision so we enter empty string ,so it will immdetily bring the empty string to the text box ,so it look like blank .
    }
  return (
    <form className="AddTodoForm" onSubmit ={handleSubmit}>
        <input type="text" className="todo-input" value ={value} placeholder = 'Update Task' onChange = {(e)=>setValue(e.target.value)} />
        <button type="submit" className ='todo-btn'>Update task</button>
    </form>
  )
}

export default EditTodoForm

