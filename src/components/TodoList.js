import TodoListItem from './TodoListItem';
import '../styles/TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            key={todo.key}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
