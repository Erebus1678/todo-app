import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        id: nanoid(),
        text: 'Create a portfolio',
        compleate: false
    }
]
const TodoSlice = createSlice({
    name: 'Todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: nanoid(),
                text: action.payload,
                compleate: false
            })
        },
        toogleTodo: (state, action) => {
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return ({
                        ...todo,
                        compleate: !todo.compleate
                    })
                } else {
                    return todo
                }
            })
        },
        clearCompleate: (state) => {
            return state.filter(todo => !todo.compleate)
        }
    }
})

const { actions, reducer } = TodoSlice

export const { clearCompleate, addTodo, toogleTodo } = actions

export default reducer