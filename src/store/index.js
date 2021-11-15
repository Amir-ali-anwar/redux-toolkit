import { configureStore } from "@reduxjs/toolkit";

import uiSlice from './ui-slice'
import cartslice from "./cart-slice";
const store= configureStore({
reducer:{ui:uiSlice.reducer,cartSlice:cartslice.reducer}
})
export default store