import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = '';

const filterSlice = createSlice({
  name: "filter",
  initialState: filtersInitialState, 
  reducer: {
    changeFilter(state, action) { state.filtersInitialState = action.payload.value}
  }
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;