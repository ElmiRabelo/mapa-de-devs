import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as UsersActions } from "../ducks/users.ducks";

export default function* getUser(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload.username}`);
    const { latitude, longitude } = action.payload;
    const newUser = { ...response.data, latitude, longitude };
    yield put(UsersActions.getUserSuccess(newUser));
  } catch (err) {
    yield put(UsersActions.error("Usuário não existe, tente outro."));
  }
}
