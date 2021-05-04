import { v4 as uuidv4 } from "uuid";
let initState = [
  {
    id: 1,
    description: "Hello",
    isDone: false,
  },
];
const TodoReducer = (state = initState, action) => {
  switch (action.type) {
    case "addTask":
      let newTask = {
        id: uuidv4(),
        description: action.payload,
        isDone: false,
      };
      initState = [newTask, ...initState];
      return [newTask, ...state];
    case "deliteTask":
      initState = initState.filter((el) => el.id !== action.payload);
      return state.filter((el) => el.id !== action.payload);
    case "doneTask":
      initState = initState.map((el) =>
        el.id === action.payload ? { ...el, isDone: !el.isDone } : el
      );
      return state.map((el) =>
        el.id === action.payload ? { ...el, isDone: !el.isDone } : el
      );
    case "editTask":
      initState = initState.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      return state.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    case "filter":
      if (action.payload === "done") {
        return initState.filter((el) => el.isDone);
      } else if (action.payload === "notDone") {
        return initState.filter((el) => !el.isDone);
      } else {
        return initState;
      }
    default:
      return state;
  }
};
export default TodoReducer;
