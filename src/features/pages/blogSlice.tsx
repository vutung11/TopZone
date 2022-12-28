import { createSlice } from "@reduxjs/toolkit";

const blog = createSlice({
    name: 'blogs',
    initialState: [],
    reducers: {
        addBlog: (state, action) => {
            // state.push(action.payload)
        }
    }
})

const { reducer, actions } = blog;

export const { addBlog } = actions;
export default reducer;