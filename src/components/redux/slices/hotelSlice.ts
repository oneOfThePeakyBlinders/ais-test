// apiSlice.ts

import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';

export interface Hotel {
    hotelId: number
    hotelName: string
    location: { name: string, state: null, country: string }
    locationId: number
    priceAvg: number
    priceFrom: number
    stars: 5
    isFavorite: false
}

interface hotelState {
    hotels: Hotel[];
    loading: boolean;
    error: string | undefined;
}

const initialState: hotelState = {
    hotels: [],
    loading: false,
    error: undefined,
};

const API_URL = 'http://engine.hotellook.com/api/v2/cache.json';

export const fetchHotels = createAsyncThunk(
    'api/fetchHotels',
    async ({location, checkIn, checkOut}: { location: string, checkIn: string, checkOut: string }) => {
        try {
            const response: AxiosResponse = await axios.get(API_URL, {
                params: {
                    location,
                    checkIn,
                    checkOut,
                    limit: 10
                },
            });
            // const hotelsData = response.data.map((hotel: any) => ({
            //     ...hotel,
            //     isFavorite: false,
            // }));
            //console.log(hotelsData, 'hotelsData');
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch hotels data');
        }});

const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHotels.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(fetchHotels.fulfilled, (state, action) => {
                //console.log(action.payload, 'action.payload')
                state.loading = false;
                state.hotels = action.payload;
                state.error = undefined;
            })
            .addCase(fetchHotels.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export default hotelSlice.reducer;
