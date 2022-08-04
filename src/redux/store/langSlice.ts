import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {AppState} from "./store";


export interface LangState {
    lang: string,
    directions: string
}


const initialState: LangState = {
    lang: 'fa',
    directions: 'rtl'
}

export const localizationSlice = createSlice({
    name: 'localize',
    initialState,
    reducers : {
        changeLang (state, action: {payload: string}) {
            console.log('action', action.payload)
            if (action.payload === 'en') {
                state.lang = 'en'
                state.directions = 'ltr'
            } else {
                state.lang = 'fa'
                state.directions = 'rtl'
            }

        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.lang
            }
        }
    }
})

export const { changeLang } = localizationSlice.actions;
export const selectLocalState = (state: AppState) => state.localize


export default localizationSlice.reducer