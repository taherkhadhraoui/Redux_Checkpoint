import {
  ADD_TASK,
  DELETE_ITEM,
  EDIT_ITEM,
  CHECK_ITEM,
} from "../Actions/actionTypes";

const initialState = {
  todo: [
    { id: Math.random(), todo: "item1", done: false },
    { id: Math.random(), todo: "item2", done: false },
    { id: Math.random(), todo: "item3", done: false },
    { id: Math.random(), todo: "item4", done: false },
    { id: Math.random(), todo: "item5", done: false },
  ],
};

export const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, todo: [...state.todo, action.payload] };
    case DELETE_ITEM:
      return {
        ...state,
        todo: state.todo.filter((el) => el.id !== action.payload),
      };
    case EDIT_ITEM:
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload.id
            ? { ...el, todo: action.payload.description }
            : el
        ),
      };
    case CHECK_ITEM:
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === action.payload ? { ...el, done: !el.done } : el
        ),
      };
    default:
      return state;
  }
};
