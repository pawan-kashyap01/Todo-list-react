import React from 'react'

const footer = () => {
  let footerStyle ={
    // position: 'sticky',
    // top: '92vh',
    // width: '100%',
    // border: '8px solid grey'
  }
  return (
    <footer className= 'bg-dark text-light py-2' style={footerStyle}>
      <p className='text-center '>
      Copyright &copy; MyTodoListApp.com
      </p>
    </footer>
  )
}

export default footer


