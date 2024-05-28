import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    id: number;
    label: string;
    path: string;
    x: number;
    y: number;
    width: number;
    height: number;
    open: boolean;
    minimized: boolean;
    fullSize: boolean;
}

interface AppsState {
    apps: { [id: number]: AppState };
    focusedAppId: number | null;
}

const initialState: AppsState = {
    apps: {},
    focusedAppId: null,
};

const appSlice = createSlice({
    name: 'apps',
    initialState,
    reducers: {
        addAndOpenApp(state, action: PayloadAction<AppState>) {
            const app = action.payload;
            state.apps[app.id] = app;
        },
        removeApp(state, action: PayloadAction<{ id: number }>) {
            const appId = action.payload.id;
            delete state.apps[appId];
            if (state.focusedAppId === appId) {
                state.focusedAppId = null;
            }
        },
        moveApp(state, action: PayloadAction<{ id: number; x: number; y: number }>) {
            const { id, x, y } = action.payload;
            state.apps[id].x = x;
            state.apps[id].y = y;
        },
        resizeApp(state, action: PayloadAction<{ id: number; width: number; height: number }>) {
            const { id, width, height } = action.payload;
            state.apps[id].width = width;
            state.apps[id].height = height;
        },
        toggleMinimizeApp(state, action: PayloadAction<{ id: number }>) {
            const appId = action.payload.id;
            if (state.apps[appId]) {
                state.apps[appId].minimized = !state.apps[appId].minimized;
            }
            if (state.focusedAppId === Number(appId)) {
                state.focusedAppId = null;
            }
        },
        toggleFullSizeApp(state, action: PayloadAction<{ id: number }>) {
            const appId = action.payload.id;
            if (state.apps[appId]) {
                state.apps[appId].fullSize = !state.apps[appId].fullSize;
            }
        },
        focusApp(state, action: PayloadAction<{ id: number }>) {
            state.focusedAppId = action.payload.id;
        },
    },
    selectors: {
        getAppsState(state) {
            return state.apps;
        },
        getFocusedAppId(state) {
            return state.focusedAppId;
        },
    },
});

export default appSlice.reducer;
export const { addAndOpenApp, removeApp, moveApp, resizeApp, toggleMinimizeApp, toggleFullSizeApp, focusApp } =
    appSlice.actions;
export const { getAppsState, getFocusedAppId } = appSlice.selectors;
