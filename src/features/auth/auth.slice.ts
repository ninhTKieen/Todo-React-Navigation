import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser, IAuthState, ILoginPayload} from '@myapp/models/user.model';

const initialState: IAuthState = {
  isLoggedIn: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login(state, action: PayloadAction<ILoginPayload>) {
      state.isLoggedIn = true;
    },
    loginSuccess(state, action: PayloadAction<IUser>) {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginFailed(state, action: PayloadAction<string>) {
      state.isLoggedIn = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

//Actions
export const authActions = authSlice.actions;

//Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectCurrentUser = (state: any) => state.auth.currentUser;

// Reducer
export default authSlice.reducer;
