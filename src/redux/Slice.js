//Reducer

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count:0,
    buttonColor: 'dark', 
}

const sliceCounter = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:state=>{state.count += 1},
        decrement:state=>{state.count -= 1},

        incrementByAmount:(state,action)=>{
            state.count += action.payload
        },
        decrementByAmount:(state,action)=>{
            state.count -= action.payload
        },
        toggleButtonColor: state => {
            state.buttonColor = state.buttonColor === 'dark' ? 'light' : 'dark';
        },



    }
})

export const {increment,decrement,incrementByAmount,decrementByAmount,toggleButtonColor  } = sliceCounter.actions;
export default sliceCounter.reducer;