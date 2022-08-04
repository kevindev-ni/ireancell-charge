import {createSlice, createStore} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {AppState} from "./store";

export interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers : {
        increment (state, action) {
            state.count = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.count
            }
        }
    }
})

export const { increment } = counterSlice.actions;
export const selectCounterState = (state: AppState) => state.counter.count

export default counterSlice.reducer