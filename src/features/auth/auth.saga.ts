import {PayloadAction} from '@reduxjs/toolkit';

import authenApi from './auth.api';
import {
  ILoginPayload,
  IRegisterPayload,
  IUser,
  IToken,
} from '@myapp/models/auth.model';
import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import {authActions, selectAccessToken} from './auth.slice';

function* handleLogin(action: PayloadAction<ILoginPayload>) {
  try {
    const response: IToken = yield call(authenApi.loginAPI, action.payload);
    //dispatch
    //non-blocking call
    yield put({type: authActions.loginSuccess.type, payload: response});
  } catch (error) {
    yield put({type: authActions.loginFailed.type});
  }
}

function* handleRegister(action: PayloadAction<IRegisterPayload>) {
  try {
    const response: IToken = yield call(authenApi.registerAPI, action.payload);

    yield put({type: authActions.registerSuccess.type, payload: response});
  } catch (error) {
    yield put({type: authActions.registerFailed.type});
  }
}

function* handleGetUser() {
  try {
    const accessToken: string = yield select(selectAccessToken);
    const response: IUser = yield call(authenApi.getUserAPI, {accessToken});

    yield put({type: authActions.getUserInfoSuccess.type, payload: response});
  } catch (error) {
    yield put({type: authActions.getUserInfoFailed.type});
  }
}

// function* watchingLoginFlow() {}

export default function* authSaga() {
  yield all([
    takeLatest(authActions.login.type, handleLogin),
    takeLatest(authActions.register.type, handleRegister),
    takeLatest(authActions.getUserInfo.type, handleGetUser),
  ]);
}
