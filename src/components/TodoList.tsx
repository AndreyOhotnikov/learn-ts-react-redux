import React from "react";
import { useEffect } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const {error, limit, loading, page, todos} = useTypedSelector(state => state.todo)
  const {fetchTodos, setTodoPage} = useAction();
  const pages =  [1, 2, 3, 4]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

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
      
      <div style={{display: 'flex'}}>
        {pages.map(p => 
        <div 
          key={p}
          onClick={() => setTodoPage(p)}
          style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}
        >
          {p}
        </div>
        )}
      </div>
      
    </div>
  )
}

export default TodoList
