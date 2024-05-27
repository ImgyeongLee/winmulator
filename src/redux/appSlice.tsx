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
    apps: { [id: number]: AppState },
    focusedAppId: number | null
}

const initialState: AppsState = {
    apps: {},
    focusedAppId: null
}

const appSlice = createSlice({
    name: "apps",
    initialState,
    reducers: {
        addAndOpenApp(state, action: PayloadAction<AppState>) {
            const app = action.payload
            state.apps[app.id] = app;
        },
        updateApp(state, action: PayloadAction<AppState>) {
            const app = action.payload
            if (state.apps[app.id]) {
                state.apps[app.id] = app
            }
        },
        removeApp(state, action: PayloadAction<{ id: number }>) {
            const appId = action.payload.id
            delete state.apps[appId]
            if (state.focusedAppId === appId) {
                state.focusedAppId = null
            }
        },
        toggleMinimizeApp(state, action: PayloadAction<{ id: number}>) {
            const appId = action.payload.id
            if (state.apps[appId]) {
                state.apps[appId].minimized = !state.apps[appId].minimized;
            }
        },
        toggleFullSizeApp(state, action: PayloadAction<AppState>) {
            const app = action.payload;
            if (state.apps[app.id]) {
                state.apps[app.id].fullSize = !state.apps[app.id].fullSize;
            }
        },
        toggleOpenApp(state, action: PayloadAction<AppState>) {
            const app = action.payload;
            if (state.apps[app.id]) {
                state.apps[app.id].open = !state.apps[app.id].open;
            }
        },
        focusApp(state, action: PayloadAction<{ id: number }>) {
            state.focusedAppId = action.payload.id
        }
    },
    selectors: {
        getAppsState(state) {
            return state.apps
        },
        getFocusedAppId(state) {
            return state.focusedAppId
        }
    }
})

export default appSlice.reducer
export const {addAndOpenApp, updateApp, removeApp, toggleMinimizeApp, toggleOpenApp, toggleFullSizeApp, focusApp} = appSlice.actions
export const {getAppsState, getFocusedAppId} = appSlice.selectors