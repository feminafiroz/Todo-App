import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();


const TodoWrapper = () => {
    const [todos,setTodos] = useState([])

    const addTodo = (todo) => {
      // Check for duplicate tasks before adding
      if (!todos.some(existingTodo => existingTodo.task === todo)) {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
      } else {
        alert('Task already exists!'); 
      }
    };


const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,
            completed : !todo.completed}: todo ))
        }

const deleteTodo = id =>{
  setTodos(todos.filter(todo => todo.id !== id))
}

const editTodo = id =>{
  setTodos(todos.map(todo => todo.id === id ? {...todo,
    isEditing : !todo.isEditing} :todo))
}

const editTask = (task,id) =>{
  setTodos(todos.map(todo => todo.id === id  ? {...todo,
   task,isEditing : !todo.isEditing} : todo))
}

  return (
    <div className = 'TodoWrapper'>
        <h1>Get things Done !</h1>
      <TodoForm  addTodo = {addTodo}/>
    {/* generate the todo for each value in the state.. */}
      {todos.map((todo,index) => (
        todo.isEditing ?(
          <EditTodoForm editTodo = {editTask} task = {todo}/>
          
        ):(
            <Todo task={todo} key = {index} 
            toggleComplete = {toggleComplete}
             deleteTodo = {deleteTodo} 
             editTodo= {editTodo}/>
        )
      ))}
      
    </div>
  )
}

export default TodoWrapper
