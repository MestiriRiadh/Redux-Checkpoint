import { useSelector } from "react-redux";
import Task from "./Task";
import { Stack } from "@chakra-ui/react";
const ListTask = (props) => {
  const todos = useSelector((state) => state.todoReducer);
  return (
    <Stack>
      {todos.map((el) => (
        <Task statue={props.statue} todo={el} key={el.id} />
      ))}
    </Stack>
  );
};
export default ListTask;
