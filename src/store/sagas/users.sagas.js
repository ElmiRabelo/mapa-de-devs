import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as UsersActions } from "../ducks/users.ducks";

export default function* getUser(action) {
  try {
    const response = yield call(api.get, `/users/${action.payload}`);

    yield put(UsersActions.getUserSuccess(response.data));
  } catch (err) {
    console.tron.log("Usuário não encontrado");
  }
}
