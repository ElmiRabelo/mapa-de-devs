import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as UsersActions } from "../ducks/users.ducks";

export default function* getUser(action) {
  try {
    // O payload é um objeto que contem o username do github e localização no mapa
    const { latitude, longitude, username } = action.payload;

    const response = yield call(api.get, `/users/${username}`);
    //a resposta do github api contém os dados do user no github, mas a localização é informada pelo clique no mapa
    const newUser = { ...response.data, latitude, longitude };
    yield put(UsersActions.getUserSuccess(newUser));
  } catch (err) {
    yield put(UsersActions.error("Usuário não existe, tente outro."));
  }
}
