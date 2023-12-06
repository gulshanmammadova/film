import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: [],
}
const listSlice = createSlice({
    name:'list',
    initialState,
    reducers:{
        addlist:(state,action)=>{
            // state.value=state.value+ action.payload
            state.value.push(action.payload)
            // console.log(state.value)
            // console.log(action.payload)

            // [...state.value, { listTitle: inp, listItem: [...listItem] }]
        }
    }
})
export const {addlist}=listSlice.actions;
export default listSlice.reducer