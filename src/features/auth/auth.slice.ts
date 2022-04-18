import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthState, IToken, IUser} from '@myapp/models/auth.model';

// const initialState: IAuthState = {
//   isLoggedIn: false,
//   token: '',
// };

const initialState: IAuthState = {
  accessToken: undefined,
  isLoggedIn: false,
  currentUser: undefined,

  isPendingLoggedIn: false,
  isFetchingUserAPI: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login(state, _action: PayloadAction<{email: string; password: string}>) {
      state.isPendingLoggedIn = true;
    },

    loginSuccess(state, action: PayloadAction<IToken>) {
      state.isPendingLoggedIn = false;
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginFailed(state) {
      state.isPendingLoggedIn = false;
      state.isLoggedIn = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
      state.accessToken = undefined;
    },

    getUserInfo(state) {
      state.isFetchingUserAPI = true;
    },

    getUserInfoSuccess(state, action: PayloadAction<IUser>) {
      state.isFetchingUserAPI = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },

    getUserInfoFailed(state) {
      state.isFetchingUserAPI = false;
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
export const selectIsPendingLoggedIn = (state: any) =>
  state.auth.isPendingLoggedIn;
export const selectAccessToken = (state: any) => state.auth.accessToken;
// Reducer
export default authSlice.reducer;
