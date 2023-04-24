import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { body: { title: "", description: "", trl: "" }, edit: false },
  reducers: {
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
  },
});
export const { actions, reducer } = productSlice;
export const { changeTitle, changeDescription, changeTrl } = actions;
export const productData = (state) => state.product;
export default reducer;
