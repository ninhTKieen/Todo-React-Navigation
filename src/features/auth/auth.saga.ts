import {PayloadAction} from '@reduxjs/toolkit';

import authenApi from './auth.api';
import {ILoginPayload, IUser} from '@myapp/models/auth.model';
import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import {authActions, selectAccessToken} from './auth.slice';

function* handleLogin(action: PayloadAction<ILoginPayload>) {
  try {
    const response: IUser = yield call(authenApi.loginAPI, action.payload);
    //dispatch
    //non-blocking call
    yield put({type: authActions.loginSuccess.type, payload: response});
  } catch (error) {
    yield put({type: authActions.loginFailed.type});
  }
}

function* handleGetUser() {
  try {
    const accessToken: string = yield select(selectAccessToken);
    const response: IUser = yield call(authenApi.getUserAPI, {accessToken});

    yield put({type: authActions.getUserInfoSuccess, payload: response});
  } catch (error) {
    yield put({type: authActions.getUserInfoFailed.type});
  }
}

// function* watchingLoginFlow() {}

export default function* authSaga() {
  yield all([
    takeLatest(authActions.login.type, handleLogin),
    takeLatest(authActions.getUserInfo.type, handleGetUser),
  ]);
}
