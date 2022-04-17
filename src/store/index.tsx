import {configureStore} from '@reduxjs/toolkit';

import createSagaMiddleWare from 'redux-saga';

import rootSaga from '@myapp/features/rootSaga';
import counterReducer from '@myapp/features/counter/counterSlice';
import authReducer from '@myapp/features/auth/auth.slice';

const sagaMiddleWare = createSagaMiddleWare();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});
sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
