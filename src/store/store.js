import { configureStore } from '@reduxjs/toolkit'
import reducer from '../components/TodoSlice'

const store = configureStore({
    reducer: {
        reducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export default store