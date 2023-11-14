import { Button, Image, useDisclosure } from "@chakra-ui/react";
import React from "react";
import addIcon from "../../../images/addIcon.png";
import CreateProject from "../../Home/Components/CreateProject";

export function ModalwithProject() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        backgroundColor={"#211935"}
        color={"white"}
        w={"390px"}
        h={"60px"}
        borderRadius={"10px"}
        _hover={"#211935"}
        fontSize={"30px"}
        onClick={onOpen}
      >
        <Image
          src={addIcon}
          width={"38px"}
          h={"38px"}
          marginRight={"20px"}
        ></Image>
        New Project
      </Button>
      <CreateProject isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
