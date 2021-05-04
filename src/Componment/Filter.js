import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { HStack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { useDispatch } from "react-redux";
import { FilterTask } from "../Actions/Actions";
const Filter = (props) => {
  const dispatch = useDispatch();
  const handChange = (value) => {
    dispatch(FilterTask(value));
    props.setStatue(value);
  };
  return (
    <FormControl as="fieldset">
      <RadioGroup onChange={handChange} defaultValue="all">
        <HStack spacing="24px">
          <Radio value="all">All</Radio>
          <Radio value="done">Done</Radio>
          <Radio value="notDone">Not Done</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
};
export default Filter;
