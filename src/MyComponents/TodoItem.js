import React from 'react'

export default function TodoItem({todo, onDelete,ss}) {
  return (
    <div>
      <h5>{ss}.  <b><i>{todo.title}</i></b> <button className='btn btn-sm btn-danger' onClick={()=> {onDelete(todo)}}>Delete</button></h5>
      <p >{todo.desc} </p>
      <br />
      
    </div>
  )
}
