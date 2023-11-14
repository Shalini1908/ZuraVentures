import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import addIcon from "../../../images/addIcon.png";
import { useSelector } from "react-redux";

import CreateProject from "../../Home/Components/CreateProject";
import Email from "../../Home/Components/Email";

export const ModalwithoutProject = ({ isOpen, onOpen, onClose }) => {
  const userEmail = useSelector((state) => state.user.userEmail);

  const handleCreateProject = () => {
    onOpen();
  };

  return (
    <div>
        <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
   
    >
      <Button
        backgroundColor="#211935"
        color="white"
        width="390px"
        height="60px"
        borderRadius="10px"
        _hover="#211935"
        fontSize="30px"
        onClick={handleCreateProject}
      >
        <Image src={addIcon} width="38px" height="38px" marginRight="20px" />
        Create New Project
      </Button>
    </Box>
    
      {userEmail ? (
        <CreateProject isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      ) : (
        <Email isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      )}
    </div>
  );
};
