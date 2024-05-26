import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ThemeState {
    theme: string;
}

const initialState: ThemeState = {
    theme: "xp",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme(state: ThemeState, action: PayloadAction<{theme: string}>) {
            state.theme = action.payload.theme
        }
    },
    selectors: {
        getTheme(selectSlice: ThemeState) {
            return selectSlice.theme
        }
    }
})

export default themeSlice.reducer
export const { setTheme } = themeSlice.actions
export const { getTheme } = themeSlice.selectors