import { createSlice } from '@reduxjs/toolkit';

const timer = createSlice({
    name: 'timer',
    initialState: {
        status: false,
        time: 180,
        isShow: false,
    },
    reducers: {
        setTimerInitial: (state) => {
            state.isShow = false;
            state.time = 180;
            state.status = true;
        },
        setTimerCount: (state) => {
            state.time = state.time - 1;
        },
        setTimerReset: (state) => {
            state.time = 180;
            state.isShow = false;
        },
        setTimerShow: (state) => {
            state.isShow = true;
        },
        setTimerStop: (state) => {
            state.isShow = false;
            state.time = 180;
            state.status = false;
        }
    },
});

export const {
    setTimerInitial,
    setTimerCount,
    setTimerReset,
    setTimerShow,
    setTimerStop
} = timer.actions;

export default timer.reducer;