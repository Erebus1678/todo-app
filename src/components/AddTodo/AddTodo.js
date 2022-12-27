import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../TodoSlice'

import './AddTodo.sass'
import arrow from './Arrow.svg'

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const submitTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo(text))
        setText('')
    }

    return (
        <form
            className='AddTodo'
            onSubmit={submitTodo}
        >
            <input type="text"
                placeholder='Create a new todo...'
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                type='submit'
            >
                <img src={arrow} alt="" />
            </button>
        </form>
    )
}

export default AddTodo