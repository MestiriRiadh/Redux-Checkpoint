import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Add } from "../Actions/Actions";
import { useForm } from "react-hook-form";

function Addtask() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(Add(data.todo));
    setValue("todo", "");
  };

  return (
    <>
      <Flex
        alignItems="center"
        p={10}
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl>
          <Input
            {...register("todo", { required: true })}
            id="task"
            placeholder="New task"
          />
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Add task
        </Button>
      </Flex>
      {errors.todo && "Todo is required!!!"}
    </>
  );
}
export default Addtask;
