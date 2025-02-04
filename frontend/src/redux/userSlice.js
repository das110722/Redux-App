import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "das110722",
        age: 20,
        about: "I am developer",
        avaUrl: "https://i.redd.it/7ipyf6pvqac61.png",
        themeColor: "#ff9051",
        pending: false,
        error: false,
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateError: (state) => {
            state.pending = false;
            state.error = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.error = false;
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        }
    }
})

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;