import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {counterSlice} from './counterSlice'
import {localizationSlice} from './langSlice'
import {createWrapper} from "next-redux-wrapper";

const store = () =>
    configureStore({
        reducer: {
            [counterSlice.name] : counterSlice.reducer,
            [localizationSlice.name] : localizationSlice.reducer
        },
        devTools: true
    });



export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;

// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown,Action>;
export const wrapper = createWrapper<AppStore>(store);