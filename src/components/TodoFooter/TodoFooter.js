import { useDispatch, useSelector } from 'react-redux'
import { clearCompleate } from '../TodoSlice'

import './TodoFooter.sass'

const TodoFooter = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.reducer)
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <p className='footer__items-counter'>{todos.length} Items</p>
                <button
                    className='footer__clear'
                    onClick={() => dispatch(clearCompleate())}
                >
                    Clear Complete</button>
            </div>
        </footer>
    )
}

export default TodoFooter