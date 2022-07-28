import React, { useState } from 'react';
import './TodoAdd.css';

function useInputValue(defaultValue = '') {
   const [value, setValue] = useState(defaultValue);

   return {
      bind: {
         value,
         onChange: e => setValue(e.target.value)
      },
      clear: () => setValue(''),
      value: () => value
   }
}

export default function TodoAdd({ onCreate }) {
   const input = useInputValue('')

   function handlerSubmit(e) {
      e.preventDefault();

      if (input.value().trim()) {
         onCreate(input.value());
         input.clear()
      }
   }
   return (
      <div className='todo-add'>
         <h2 className='todo-add__title'>Add Todo</h2>
         <form className='todo-add__form' onSubmit={handlerSubmit}>
            <input className='todo-add__input' {...input.bind} maxLength={40} />
            <button className='todo-add__button' type='submit'>add</button>
         </form>
      </div>
   )
}
