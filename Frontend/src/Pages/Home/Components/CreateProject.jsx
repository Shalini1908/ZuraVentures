import React, { useState } from "react";
import {
  Button,
  FormControl,
  Text,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { CreateProjectsFunction } from "../../../Redux/projects/projects.action";

const CreateProject = ({ isOpen, onOpen, onClose }) => {
  const dispatch = useDispatch();
  const [createProject, setCreateProject] = useState("");
  const userEmail = useSelector((state) => state.user.userEmail);

  const handleCreateProject = () => {
    const projectBody =  {
      project_title : createProject,
      user_email: userEmail,
    }
    dispatch(CreateProjectsFunction({ projectBody, userEmail }));

    onClose();
    setCreateProject("");
  };

  return (
    <div>
      <Modal
        size={"4xl"}
        isOpen={isOpen}
        onClose={onClose}
        border={"1px solid"}
      >
        <ModalOverlay />
        <ModalContent borderRadius={"15px"} marginTop={"111px"} height={"auto"}>
          <ModalHeader fontWeight={900} fontSize={"26px"}>
            Create Project
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontWeight={500}>Enter Project Name:</FormLabel>
              <Input
                placeholder="Type Here"
                value={createProject}
                height={"60px"}
                p={"10px"}
                marginTop={"20px"}
                onChange={(e) => setCreateProject(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Text mr={3} color={"red"} onClick={onClose} cursor={"pointer"}>
              Cancel
            </Text>
            <Button
              backgroundColor={"#7e22ce"}
              color={"white"}
              cursor={"pointer"}
              onClick={handleCreateProject}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateProject;
