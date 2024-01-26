import { createAsyncThunk } from "@reduxjs/toolkit"
import itemAPI from "./createAPI/itemAPI"


export const getTodo = createAsyncThunk(
    'todo/getAll',
    // eslint-disable-next-line no-empty-pattern
    async({},{rejectWithValue}) => {
        try {
            const res = await itemAPI.getAllItems()
            return res;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)