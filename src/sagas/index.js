import { call, put, takeLatest } from "redux-saga/effects";
import { DATA_ACTIONS, setLoadedData } from "../reducers/data";

const DUMMY_JSON = {
  male: [5, 10, 30, 36, 30, 20, 10, 5, 4, 3],
  female: [3, 5, 10, 15, 25, 30, 25, 20, 10, 5],
  average: 41
};

var fakeFetchPromise = new Promise(function(resolve) {
  setTimeout(function() {
    resolve(DUMMY_JSON);
  }, 300);
});

function* fakeFetch() {
  try {
    const results = yield call(() => fakeFetchPromise);
    yield put(setLoadedData(results));
  } catch (e) {
    throw new Error(e);
  }
}

function* mySaga() {
  yield takeLatest(DATA_ACTIONS.GET_DATA, fakeFetch);
}

export default mySaga;
