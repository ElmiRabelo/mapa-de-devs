import { all, takeLatest } from "redux-saga/effects";

import { Types as UsersTypes } from "../ducks/users.ducks";

import getUser from "./users.sagas";

export default function* rootSaga() {
  yield all([takeLatest(UsersTypes.GET_REQUEST, getUser)]);
}
