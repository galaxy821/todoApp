import React, { useCallback } from 'react';
// import { List } from '../../node_modules/react-virtualized/dist/commonjs/index';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import '../styles/TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRender = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRender}
      list={todos}
      style={{ outline: 'none' }}
    />
    // <div className="TodoList">
    //   {todos.map((todo) => {
    //     return (
    //       <TodoListItem
    //         todo={todo}
    //         key={todo.key}
    //         onRemove={onRemove}
    //         onToggle={onToggle}
    //       />
    //     );
    //   })}
    // </div>
  );
};

export default React.memo(TodoList);
