import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user";

export const GentlemanStore = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});
export default GentlemanStore;