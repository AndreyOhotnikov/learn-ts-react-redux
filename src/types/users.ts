export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR'
}

export interface  FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

export interface  FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_SUCCESS;
  payload: any[];
}

export interface  FetchUsersErrorAction {
  type: UserActionTypes.FETCH_ERROR;
  payload: string;
}

export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
