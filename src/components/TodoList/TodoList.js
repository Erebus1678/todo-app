import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toogleTodo } from '../TodoSlice'

import './TodoList.sass'
import check from './Check.svg'
import checked from './CheckTrue.svg'


const TodoList = () => {
    const todos = useSelector(state => state.reducer)
    const elements = todos.map(todo => {
        return <TodoItem text={todo.text} compleate={todo.compleate} id={todo.id} />
    })

    return (
        <ul className='todoList'>
            {elements}
        </ul>
    )
}



const TodoItem = ({ text, compleate, id }) => {
    const [status, setStatus] = useState(compleate)
    const dispatch = useDispatch()

    const textDoneClass = status
        ? 'todoList__item__text_done'
        : 'todoList__item__text'

    const compleateTodo = () => {
        dispatch(toogleTodo(id))
        setStatus(!status)
    }

    return (
        <li key={id}>
            <label className='todoList__item'>
                <input type="checkbox"
                    onChange={compleateTodo}
                    value={status}
                />
                <img src={status ? checked : check}
                    alt='Checkbox'
                    className='todoList__newCheckbox' />
                <p className={textDoneClass}>{text}</p>
            </label>
        </li>
    )
}

export default TodoList
