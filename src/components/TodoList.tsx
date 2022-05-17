import React from "react";
import { useEffect } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const {error, limit, loading, page, todos} = useTypedSelector(state => state.todo)
  const {fetchTodos} = useAction()

  useEffect(() => {
    fetchTodos(page, limit)
  }, [])

  if (loading) return (
    <h1>Идет загрузка дел...</h1>
  )

  if (error) return (
    <h1>Произошла ошибка {error}</h1>
  )
  
  return (
    <div>
      {todos.map(todo => 
          <div key={todo.id}>{todo.id} - {todo.title}</div>
        )}
    </div>
  )
}
