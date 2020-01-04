import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";

import ShopActionTypes from "./shop.types";


export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot); // call is used in case the function takes longer than we expect
      // recommeded to use "call" to invoke functions in redux-saga
      // recommended to add yield wherever we can for easier testing
    yield put(fetchCollectionsSuccess(collectionsMap));
      // put is equivalent to thunk's dispatch
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // promise based implmentation in thunk
  // collectionRef.get().then(snapshot => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   dispatch(fetchCollectionsSuccess(collectionsMap));
  // }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}