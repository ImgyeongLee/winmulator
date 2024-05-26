import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./themeSlice"
import iconSelectionReducer from "./iconSelectionSlice"

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        iconSelectionReducer: iconSelectionReducer
    }
})

store.subscribe( () => {
    console.log("== store: ", store.getState())
})