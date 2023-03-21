import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  let todosStyle={
    minHeight: '50vh',
    margin:' 10px auto',
    background: 'aliceblue'
  }
  return (
    <div>
    <h3 className='text-center'>Todos List</h3>
    <div className='container ' style={todosStyle}>
      {props.todos.length ===0 ? 'No todos available' :
      props.todos.map((todo,i)=>{
        return (
        <TodoItem todo={todo} ss={i+1} key={todo.sno} onDelete={props.onDelete}/>
        )        
      })
    }
  </div>
    </div>
  )
}
