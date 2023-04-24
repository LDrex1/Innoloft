import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    sex: "",
    profilePicture: "",
    position: "",
  },
  reducers: {
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
  },
});
export const { actions, reducer } = userSlice;
export const {} = actions;
export const userData = (state) => state.user;
export default reducer;
