import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList(props) {
  return (
    <div className="todolist">
      <ul className="todolist__list">
        {props.todos.map((todo, index) => {
          return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
        })}
      </ul>
    </div>
  );
}
