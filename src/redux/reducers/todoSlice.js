import { createSlice } from "@reduxjs/toolkit";
import { getTodo } from "../../api/apiRequest";

const initialState = {
    isFetching: false,
    error: false,
    data: [],
    message: null
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getTodo.pending, (state,action) => {
                state.isFetching= true
                state.error = null
            })
            .addCase(getTodo.fulfilled, (state, action) => {
                state.isFetching = false
                state.error= false
                state.data= action.payload
            })
            .addCase(getTodo.rejected, (state,action) => {
                state.error = true;
                state.message = action.payload
            })
    }
})

export default todoSlice.reducer