import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

export default function App() {

  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트의 기초 알아보기',
      checked : true
    },
    {
      id : 2,
      text : '리액트의 스타일링 해보기',
      checked : false
    },
    {
      id : 3,
      text : '일정관리 앱 만들어보기',
      checked : false
    }
  ]);
  
  //고유값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(4)
  
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id : nextId.current,
        text,
        checked : false
      };
      if( text === ''){ alert("할 일을 입력해주세요."); return}
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(

    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));    
    },
    [todos],
  )

  const onToggle = useCallback(
    (id) => {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, checked : !todo.checked} : todo )); 
    },
    [todos],
  )

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  )
}

