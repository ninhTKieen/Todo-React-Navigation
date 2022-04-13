import {PayloadAction} from '@reduxjs/toolkit';
import {loginApi} from '@myapp/api/auth.api';
import {ILoginPayload, IUser} from '@myapp/models/user.model';
import {call, put, takeLatest, all} from 'redux-saga/effects';
import {authActions} from './auth.slice';

function* handleLogin(action: PayloadAction<ILoginPayload>) {
  try {
    const response: IUser = yield call(loginApi, action.payload);
    //dispatch
    //non-blocking call
    yield put({type: authActions.loginSuccess.type, payload: response});
  } catch (error) {
    yield put({type: authActions.loginFailed.type});
  }
}

// function* watchingLoginFlow() {}

export default function* authSaga() {
  yield all([takeLatest(authActions.login.type, handleLogin)]);
}
