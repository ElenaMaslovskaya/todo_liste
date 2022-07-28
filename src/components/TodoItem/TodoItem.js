import React, { useContext } from 'react';
import './TodoItem.css';
import Context from '../../context/Context';

export default function TodoItem({ todo, index, onChange }) {
   const {removeTodo} = useContext(Context)
   const classes = [];

   if (todo.completed) {
      classes.push('todo__done')
   }

   return (
      <li className='todo__input'>
         <span className={classes.join(' ')}>
            <input
               type="checkbox"
               checked={todo.completed}
               onChange={() => onChange(todo.id)}
            />
            <strong>{index + 1}.</strong>
            <div className='todo__text'>{todo.title}</div>
         </span>
         <button className='todo__button' type='button' onClick={removeTodo.bind(null,todo.id)}>&times;</button>
      </li>
   )
}
