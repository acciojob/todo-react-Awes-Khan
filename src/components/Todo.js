import React from "react";


const Todo = () =>{

  const [todos, setTodos] = React.useState([]);

  const addTodo = () =>{
    const newTodo = document.getElementById("todoName").value ;
    const filteredTodos = [...todos,newTodo];
    setTodos(filteredTodos);
    // showList(todos);
    // console.log("add todos",newTodo, filteredTodos);
  }
  const deleteTodo = (removeTodo) =>{

    console.log(removeTodo,todos); // Should log: true
    const filteredTodos = todos.filter((todo) => todo !== removeTodo);
    setTodos(filteredTodos);
    console.log("deleted todo",removeTodo, filteredTodos);
    
  }
  const showList = (todoList) =>{
    return todos.map((todo, index)=>(
      <tr key={index}>
        <td>{todo}</td>
        <td>
          <button onClick={()=>{deleteTodo(todo)}}>Delete</button>
        </td>
      </tr>
    ))


    // let string = "";
    // const body = document.getElementById("data");


    // for(let i = 0; i < todoList.length; i++){

    //   const tr = body.insertRow(i);
    //   const td1 = tr.insertCell(0);
    //   const td2 = tr.insertCell(1);
    //   const btn = createElement("button");

    //   btn.textContent = "Delete";
    //   btn.addEventListener("click",deleteTodo(todoList[i]));
    //   td1.innerHTML = todoList[i];
    //   td2.appendChild(btn);
    //   // tr.appendChild(td1);
    //   // tr.appendChild(td2);
    //   // body.appendChild(tr);

    //   // string += `<tr><td colspan='2'>{todoList[i]}</td><td><button onClick={deleteTodo(todoList[i])} ></button</td</tr>`;

    //   console.log(todoList[i]);
    // }
    // // return (string);
    // console.log("show todos",todos);
  }

  return (
    <div>
      <div id="form">
        <h1> Todo List </h1>
        <input type="text" id="todoName"/>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        <ul>
        {todos.map((todo, index)=>(
            <li key={index}>
              <p>{todo}</p>
              <p>
                <button onClick={()=>{deleteTodo(todo)}}>Delete</button>
              </p>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
};

export default Todo
