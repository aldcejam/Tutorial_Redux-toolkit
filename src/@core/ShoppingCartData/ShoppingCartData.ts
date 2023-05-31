import { RootState } from "@/redux.config/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDProps, IShoppingCartDataProps, ShoppingCartItemsProps } from "./IShoppingCartData"

const initialState: IShoppingCartDataProps = {
    ID: "" as IDProps,
    shoppingCartItems: {} as ShoppingCartItemsProps
}

export const ShoppingCartDataSlice = createSlice({
    name: "ShoppingCartData",
    initialState,
    reducers: {
        setID: (state, action: PayloadAction<IDProps>) => {
            state.ID = action.payload
        },
        setShoppingCartItems: (state, action: PayloadAction<ShoppingCartItemsProps>) => {
            state.shoppingCartItems = action.payload
        }
    }
})

export const {
    setID,
    setShoppingCartItems

} = ShoppingCartDataSlice.actions

export const ShoppingCartDataStates = (state: RootState) => state.ShoppingCartData

export default ShoppingCartDataSlice.reducer