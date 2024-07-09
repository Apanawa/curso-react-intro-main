import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: "Cortar Cebolla", completed: true},
  {text: "Tomar el curso de Intro a React.js", completed: false},
  {text: "Llorar con la Llorona", completed: false},
  {text: "lalalalala", completed: false},
  {text: "usar estados derivados", completed: true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  console.log("los usuarios buscan todos de " + searchValue);

  return (
    <>
      <TodoCounter
       completed={completedTodos}
       total={totalTodos}
       />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}



export default App;
