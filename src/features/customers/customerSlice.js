import { createSlice } from '@reduxjs/toolkit';
import reducer from '../accounts/accountSlice';

const initialState = { fullName: '', nationalID: '', createdAt: '' };
const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
  },
  updateMame(state, action) {
    state.fullName = action.payload;
  },
});
export const { createCustomer, updateMame } = customerSlice.actions;
export default customerSlice.reducer;
