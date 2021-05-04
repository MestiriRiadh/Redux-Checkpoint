import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit, FaTimes } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { GoCheck } from "react-icons/go";
import { Box, HStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Delite, Done, FilterTask } from "../Actions/Actions";
import EditTask from "./EditTask";

const Task = (props) => {
  const dispatch = useDispatch();
  const doneTask = () => {
    dispatch(Done(props.todo.id));
    dispatch(FilterTask(props.statue));
  };
  const deliteTask = () => {
    dispatch(Delite(props.todo.id));
  };
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <HStack justifyContent="space-between">
        <h1
          style={{
            textDecoration: props.todo.isDone ? "line-through" : "none",
          }}
        >
          {props.todo.description}
        </h1>
        <div>
          <IconButton
            onClick={deliteTask}
            isRound
            icon={<RiDeleteBin6Line />}
          />
          <EditTask todo={props.todo} />
          <IconButton
            onClick={doneTask}
            isRound
            colorScheme={props.todo.isDone ? "red" : "green"}
            icon={props.todo.isDone ? <FaTimes /> : <GoCheck />}
          />
        </div>
      </HStack>
    </Box>
  );
};
export default Task;
