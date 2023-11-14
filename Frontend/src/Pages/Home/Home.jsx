import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import banner from "../../images/firstPageBanner.png";
import home from "../../images/home.png";
import { ModalwithoutProject } from "../Create/Component/ModalwithoutProject";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar";
import { fetchProjects } from "../../Redux/projects/projects.action";
import Projects from "../Projects";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.userEmail);
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    if (userEmail) {
      dispatch(fetchProjects(userEmail));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail]);

  return (
    <Box
      width={"100%"}
      minH={"100vh"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Navbar />

      <Box
        width={"198.69px"}
        marginLeft={"155px"}
        display={"flex"}
        marginTop={"-60px"}
        padding={"10px"}
      >
        <Button
          width={"200px"}
          border={"0.75px solid rgba(153, 153, 153, 1)"}
          borderRadius={"35.32px"}
          display={"flex"}
          padding={"10px"}
          fontSize={"18px"}
          color={"rgba(60, 60, 60, 1)"}
          backgroundColor={"rgba(255, 255, 255, 1)"}
          _hover={"rgba(255, 255, 255, 1)"}
        >
          <Image src={home} marginTop={"-4px"} />
          Back to Home
        </Button>
      </Box>
      {!projects.length ? (
        <Box>
          <Box
            width={"694px"}
            height={"100px"}
            margin={"auto"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Heading
              color={"rgba(126, 34, 206, 1)"}
              fontWeight={700}
              fontSize={["20px", "43.41px", "63.41px"]}
              lineHeight={"86.03px"}
            >
              Create a New Project
            </Heading>
          </Box>
          <Image
            src={banner}
            width={"539.03px"}
            height={"361.67px"}
            margin={"auto"}
          />

          <Box
            margin={"auto"}
            width={"66%"}
            height={"120px"}
            padding={"5px 10px"}
            marginTop={"20px"}
            textAlign={"justify"}
          >
            <Text
              color={"rgba(131, 131, 131, 1)"}
              textAlign={"center"}
              lineHeight={"29px"}
              fontSize={["16px", "20px", "20px"]}
              fontWeight={400}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in
            </Text>
          </Box>
          <ModalwithoutProject
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </Box>
      ) : (
        <Projects
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          projects={projects}
        />
      )}
    </Box>
  );
};

export default Home;
