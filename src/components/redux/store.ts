import { configureStore } from '@reduxjs/toolkit'
import hotelSlice from "./slices/hotelSlice";
export const store = configureStore({
    reducer: {
        hotelSlice
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch