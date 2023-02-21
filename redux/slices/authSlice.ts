import { Action, AnyAction, createSlice } from "@reduxjs/toolkit";
import { TYPE_ACTION_AUTH, TYPE_REDUCER_AUTH } from "common/typeActionRedux";
import { HYDRATE } from "next-redux-wrapper";
import { call, put, takeLatest } from "redux-saga/effects";
// Type for our state
export interface AuthState {
  authState: boolean;
  total: number;
}

// Initial state
const initialState: AuthState = {
  authState: false,
  total: 0,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthStateSuccess(state, action) {
      state.authState = action.payload;
    },
    setTotalSuccess(state, action) {
      state.total = action.payload;
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

function* setAuthState(action: Action) {
  yield put({ type: TYPE_REDUCER_AUTH.SET_AUTH_STATE_SUCCESS, payload: true });
}
function* setTotal(action: AnyAction) {
  yield put({
    type: TYPE_REDUCER_AUTH.SET_TOTAL_SUCCESS,
    payload: action?.payload,
  });
}

export function* authSaga() {
  yield takeLatest(TYPE_ACTION_AUTH.SET_AUTH_STATE, setAuthState);
  yield takeLatest(TYPE_ACTION_AUTH.SET_TOTAL, setTotal);
}

export default authSlice;
