import { fork } from "redux-saga/effects";
import { authSaga } from "redux/slices/authSlice";

export default function* rootSaga() {
  yield fork(authSaga);
}
