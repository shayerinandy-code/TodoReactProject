import { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import type { Todo } from '../App'

interface TodoListProps {
  todos: Todo[]
  onAdd: (text: string) => void
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onAdd, onToggle, onDelete }) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div>
      <TodoInput onAdd={onAdd} />

      <div style={{ margin: '10px 0' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      {/* Todo list */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTodos.length === 0 ? (
          <p>No todos yet!</p>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={onToggle}
              deleteTodo={onDelete}
            />
          ))
        )}
      </ul>
    </div>
  )
}

export default TodoList