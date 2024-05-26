'use client'
import React from 'react'

// redux
import {Provider} from 'react-redux'
import {store} from "@/redux/store.js";

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    return <Provider store={store}>{children}</Provider>
}