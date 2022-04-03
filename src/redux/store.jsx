import { configureStore } from "@reduxjs/toolkit";
import windowReducer from "./windowReducer";

const store = configureStore({
    reducer: {
        window: windowReducer,
    },
});

export default store;