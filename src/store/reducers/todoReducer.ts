import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todo: [],
  error: null,
  loading: false,
  limit: 10,
  page: 1
}

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return {...state, loading:true}
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return {...state, todo: action.payload}
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return {...state, error: action.payload}
    case TodoActionTypes.SET_TODOS_PAGE:
      return {...state, page: action.payload}
  
    default:
      return state;
  }
}
