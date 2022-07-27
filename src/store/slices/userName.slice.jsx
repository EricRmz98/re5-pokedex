import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
		name: 'userName',
    initialState: '',
    reducers: {
        getUserName: ( stete, action ) => {
            return action.payload.trim();
        }
    }
})

export const { getUserName } = userNameSlice.actions;

export default userNameSlice.reducer;