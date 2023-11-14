import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { setUserEmail } from "../../../Redux/user/user.action";

const Email = ({ isOpen, onOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUserEmail(email));
    onClose();
  };

  return (
    <div>
      <Modal size={"4xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"15px"} marginTop={"111px"} height={"54vh"}>
          <ModalHeader fontWeight={900} fontSize={"26px"}>
            Please Sign in
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontWeight={500}>Enter Your Email:</FormLabel>
              <Input
                value={email}
                placeholder="Type your email "
                height={"60px"}
                p={"10px"}
                marginTop={"20px"}
                onChange={(e) => setEmail(e.target.value)}
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
              onClick={handleLogin}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Email;
