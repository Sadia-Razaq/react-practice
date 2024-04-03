import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./Slice.js";

const store = configureStore({

    reducer:{
        counter :countReducer,

    }

})

export default store;