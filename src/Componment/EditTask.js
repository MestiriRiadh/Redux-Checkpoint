import { Button, IconButton } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Edit } from "../Actions/Actions";
function EditTask(props) {
  //   const {
  //     register,
  //     formState: { errors },
  //     handleSubmit,
  //   } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [edit, setEdit] = useState(props.todo);
  const handChange = (e) => {
    setEdit({ ...edit, description: e.target.value });
  };
  const dispatch = useDispatch();
  const clickHand = (e) => {
    e.preventDefault();
    dispatch(Edit(edit));
    onClose();
  };
  return (
    <>
      <IconButton onClick={onOpen} mx={2} isRound icon={<FaRegEdit />} />
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent as={"form"} onSubmit={clickHand}>
          <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <FormControl>
              <Input
                value={edit.description}
                onChange={handChange}
                // {...register("todo", { required: true })}
                id="task"
                placeholder="New task"
              />
            </FormControl>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button type="submit" colorScheme="red" ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
export default EditTask;
