import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import MyLifeComponent from "./MyComponents/MyLifeComponent";
import MyClock from "./MyComponents/MyClock";
import Check from "./MyComponents/Check";
import MyForm from "./MyComponents/myForm";
import RegistrationForm from "./MyComponents/registrationForm";
import LoginForm from "./MyComponents/LoginForm";
import SignUpForm from "./MyComponents/signUpForm";
// import regForm from "./MyComponents/regForm";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am in delete mode", todo);
    // let ind  = todos.indexOf(todo);
    // todos.splice(ind,1);
    setTodos(
      todos.filter((e) => {
        return e != todo;
      })
    );
    localStorage.getItem("todos");
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this Todo", { title, desc });
    let sno;
    todos.length === 0 ? (sno = 1) : (sno = todos[todos.length - 1].sno + 1);
    const myTodo = { sno, title, desc };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title={"Task-archieve"} searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
      <LoginForm/>
      <regForm/>
      <SignUpForm/>
      <RegistrationForm/>
      <MyLifeComponent/> 
      <MyForm />
      <Check/>
      <MyClock step={10} name={'"Main-App"'}/>
    </>
  );
}

export default App;

// ([
//   {
//     sno:1,
//     title: 'Learn React',
//     desc: 'Learn Reacts js components and props.'
//   },
//   {
//     sno:2,
//     title: 'Go to market',
//     desc:'Go to market to bring fruits'
//   },
//   {
//     sno: 3,
//     title: 'Attend scrum call',
//     desc: 'Attend scrum call on time'
//   }
// ]);
