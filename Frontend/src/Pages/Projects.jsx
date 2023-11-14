import React from "react";
import { Box, Button, Card, CardBody, Heading, Image , Text} from "@chakra-ui/react";
import addIcon from "../images/addIcon.png";
import CreateProject from "./Home/Components/CreateProject";
import { Link } from "react-router-dom";

const Projects = ({ isOpen, onOpen, onClose, projects }) => {
  const handleCreateProject = () => {
    onOpen();
  };

  return (
    <div>
      <Box
        width={"80%"}
        display={"flex"}
        justifyContent={"space-between"}
        margin={"auto"}
      >
        <Box
          width={"275px"}
          height={"86px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Heading
            color={"rgba(126, 34, 206, 1)"}
            fontWeight={700}
            fontSize={["20px", "43.41px", "63.41px"]}
            lineHeight={"86.03px"}
          >
            Projects
          </Heading>
        </Box>

        <Box width={"400px"} height={"86px"}>
          <Button
            backgroundColor={"#211935"}
            color={"white"}
            w={"390px"}
            h={"60px"}
            marginTop={"10px"}
            borderRadius={"10px"}
            _hover={"#211935"}
            fontSize={"30px"}
            onClick={() => handleCreateProject()}
          >
            <Image
              src={addIcon}
              width={"38px"}
              h={"38px"}
              marginRight={"20px"}
            />
            Create New Project
          </Button>
        </Box>
      </Box>

      <Box width={"80%"} margin={"auto"}>
        <Box
          display={"grid"}
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          gap={4}
          marginTop={8}
        >
          {Array.isArray(projects) &&
            projects.map((project) => (
              <Link key={project._id} to={`/project/${project._id}`}>
              <Card
                key={project.id}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                border={"1px solid black"}
                width={"100%"}
                height={"165.34px"}
                borderRadius={"10px"}
                display={"grid"}
              >
                <CardBody display={"flex"} justifyContent={"space-between"} border={"0px solid green"} width={"100%"} padding={"10px"}>
                  <Box width={"150px"} height={"140px"} backgroundColor={"rgba(99, 102, 241, 1)"} color={"white"}  display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={"20px"}>
                    <Text text align={"center"} fontSize={"40px"}>SP</Text>
                  </Box>
                  <Box  display={"flex"} alignItems={"center"} justifyContent={"center"} >
                  <Heading size="md" text align={"center"}fontSize={"20px"}>{project.project_title}</Heading>
                  </Box>
                </CardBody>
              </Card>
              </Link>
            ))}
        </Box>
      </Box>
      <CreateProject isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </div>
  );
};

export default Projects;
