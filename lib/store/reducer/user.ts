import { User } from '@/lib/models/user';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
