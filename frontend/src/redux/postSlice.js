import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [
            {
                title: "",
                description: "",
                tag: 0, // Mặc định là "None"
            }
        ]
    },
    reducers: {
        createPost(state, action) {
            state.posts.push({
                title: action.payload.title,
                description: action.payload.description,
                tag: Number(action.payload.tag), // Đảm bảo tag là số
            });
        }
    }
})

export const { createPost } = postSlice.actions;
export default postSlice.reducer;
