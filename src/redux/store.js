import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./themeSlice"
import iconSelectionReducer from "./iconSelectionSlice"
import appReducer from "./appSlice"

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        icons: iconSelectionReducer,
        apps: appReducer
    }
})

// store.subscribe( () => {
//     console.log("== store: ", store.getState())
// })