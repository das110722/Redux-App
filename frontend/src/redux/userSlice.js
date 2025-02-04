import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "das110722",
        age: 20,
        about: "I am developer",
        avaUrl: "https://i.redd.it/7ipyf6pvqac61.png",
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
        }
    }
})

export const { update } = userSlice.actions;
export default userSlice.reducer;