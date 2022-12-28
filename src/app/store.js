import {configureStore} from '@reduxjs/toolkit'
import blogReducer from '../features/pages/blogSlice';

const rootReducer = {
    blogs: blogReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;