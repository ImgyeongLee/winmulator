import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface iconSelectState {
    id: number;
}

const initialState: iconSelectState = {
    id: -1
};

const iconSelectionSlice = createSlice({
    name: "icons",
    initialState,
    reducers: {
        setIconSelection(state, action: PayloadAction<{ id: number }>) {
            state.id = action.payload.id
        }
    },
    selectors: {
        getSelectedIconId(state) {
            return state.id
        }
    }
})

export default iconSelectionSlice.reducer
export const {setIconSelection} = iconSelectionSlice.actions
export const {getSelectedIconId} = iconSelectionSlice.selectors