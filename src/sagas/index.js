import { fork, put, take, call, select, takeLatest, takeEvery } from 'redux-saga/effects'

export default function* rootSaga() {
  yield fork(function* todo() {
    yield take('WIP')
  })
}
