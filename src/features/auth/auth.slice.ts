import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  IAuthState,
  IToken,
  IUser,
  IRegisterPayload,
} from '@myapp/models/auth.model';

// const initialState: IAuthState = {
//   isLoggedIn: false,
//   token: '',
// };

const initialState: IAuthState = {
  accessToken: undefined,
  isLoggedIn: false,
  currentUser: undefined,

  isPendingLoggedIn: false,
  isPendingRegister: false,
  isFetchingUserAPI: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, _action: PayloadAction<{email: string; password: string}>) {
      state.isPendingLoggedIn = true;
    },

    loginSuccess(state, action: PayloadAction<IToken>) {
      state.isPendingLoggedIn = false;
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
    },

    loginFailed(state) {
      state.isPendingLoggedIn = false;
      state.isLoggedIn = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
      state.accessToken = undefined;
    },

    register(state, _action: PayloadAction<IRegisterPayload>) {
      state.isPendingRegister = true;
    },

    registerSuccess(state, action: PayloadAction<IToken>) {
      state.isPendingRegister = false;
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
    },

    registerFailed(state) {
      state.isPendingRegister = false;
      state.isLoggedIn = false;
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
export const selectIsPendingRegister = (state: any) =>
  state.auth.isPendingRegister;
export const selectIsPendingLoggedIn = (state: any) =>
  state.auth.isPendingLoggedIn;
export const selectAccessToken = (state: any) => state.auth.accessToken;
// Reducer
export default authSlice.reducer;
