import { RootState } from "@/redux.config/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {

}

export const ShoppingCartDataSlice = createSlice({
    name: "ShoppingCartData",
    initialState,
    reducers: {
    }
})

export const { } = ShoppingCartDataSlice.actions

export const ShoppingCartDataStates = (state: RootState) => state.ShoppingCartData

export default ShoppingCartDataSlice.reducer