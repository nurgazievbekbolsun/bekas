import { createSlice } from "@reduxjs/toolkit";

const local = localStorage.getItem('loa')
const initialState = {
    pit: JSON.parse(local) || []
}
const pitSlice = createSlice({
    name:'pit',
    initialState,
    reducers:{
        addTadk(state,action){
            state.pit.unshift(action.payload)
            localStorage.setItem('loa',JSON.stringify(state.pit = [...state.pit]))
        }
    }
})

export default pitSlice.reducer
export const {addTadk} = pitSlice.actions