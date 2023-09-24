import { configureStore } from "@reduxjs/toolkit";
import pitReduser from "./reduser/pitSlice"
export const store = configureStore({
    reducer:{
        pits: pitReduser
    }
})