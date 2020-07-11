import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  const [age, setAge] = useState(25);
  const [fruit, setFruit] = useState('banana');
  const [fruitInput, setFruitInput] = useState('');
  const [todos, setTodos] = useState([
    {
      text: 'learn react hook',
      date: new Date(),
    }
  ])
  const [todoInput, setTodoInput] = useState()

  /**
   * 아래의 로그는 다음과 같이 찍힌다.
   * [mounted or updated -> unmounted] -> [mounted or updated -> unmounted]
   */
  useEffect(() => {
    console.log('mounted or updated'+count);
  })

  useEffect(() => {
    return () => console.log('unmounted'+count);
  })

  const handleChange = (event) => {
    setFruitInput(event.target.value);
  }

  const handleTodoChange = (event) => {
    setTodoInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFruit(fruitInput);
  }

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    const newTodos = [...todos, {text: todoInput, date: new Date()}]
    setTodos(newTodos);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>
        Click me
      </button>
      <p>my old is {age}.</p>
      <button onClick={() => setAge(age + 1)}>
        한 살 먹기
      </button>
      <p>my favorite fruite is {fruit}</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='input your favorite food' value={fruitInput} onChange={(e) => handleChange(e)}/>
        <input type="submit" value='enter'/>
      </form>
      {todos.map((todo, i) => <p key={i}>{todo.text}</p>)}
      <form onSubmit={(e) => handleTodoSubmit(e)}>
        <input type="text" placeholder='input todo' onChange={(e) => handleTodoChange(e)}/>
        <input type="submit" value='submit'/>
      </form>
    </div>
  )
}