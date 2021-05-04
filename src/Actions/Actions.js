export const Add = (data) => {
  return { type: "addTask", payload: data };
};
export const Delite = (id) => {
  return { type: "deliteTask", payload: id };
};
export const Done = (id) => {
  return { type: "doneTask", payload: id };
};
export const Edit = (task) => {
  return { type: "editTask", payload: task };
};
export const FilterTask = (statue) => {
  return { type: "filter", payload: statue };
};
