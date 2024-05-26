import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppState {
    id: number;
    label: string;
    path: string;
    x: number;
    y: number;
    open: boolean;
    minimized: boolean;
    fullSize: boolean;
}

interface AppsState {
    [id: number]: AppState
}

const initialState: AppsState = {}

const appSlice = createSlice({
    name: "apps",
    initialState,
    reducers: {
        addAndOpenApp(state, action: PayloadAction<AppState>) {
            const app = action.payload
            state[app.id] = app;
        },
        updateApp(state, action: PayloadAction<AppState>) {
            const app = action.payload
            if (state[app.id]) {
                state[app.id] = app
            }
        },
        removeApp(state, action: PayloadAction<AppState>) {
            const app = action.payload
            delete state[app.id]
        },
        toggleMinimizeApp(state, action: PayloadAction<AppState>) {
            const app = action.payload;
            if (state[app.id]) {
                state[app.id].minimized = !state[app.id].minimized;
            }
        },
        toggleFullSizeApp(state, action: PayloadAction<AppState>) {
            const app = action.payload;
            if (state[app.id]) {
                state[app.id].fullSize = !state[app.id].fullSize;
            }
        },
        toggleOpenApp(state, action: PayloadAction<AppState>) {
            const app = action.payload;
            if (state[app.id]) {
                state[app.id].open = !state[app.id].open;
            }
        }
    },
    selectors: {
        getAppsState(state) {
            return state
        }
    }
})

export default appSlice.reducer
export const {addAndOpenApp, updateApp, removeApp, toggleMinimizeApp, toggleOpenApp, toggleFullSizeApp} = appSlice.actions
export const {getAppsState} = appSlice.selectors