import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Button,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import YT from "../images/YT.png";
import Spotify from "../images/Spotify.png";
import RSS from "../images/RSS.png";
import cloud_upload from "../images/cloud_upload.png";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateProjectFiles,
  fetchProjectFiles,
} from "../Redux/projectsFiles/projectFiles.action";
import SampleProject from "./SampleProject";
import { useParams } from "react-router-dom";
import CommonModal from "./Create/Component/CommonModal";

const Uploaded = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const projectfiles = useSelector((state) => state.projectFile.projectfiles);
  const [selectedCardType, setSelectedCardType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(fetchProjectFiles(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (projectfiles) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [projectfiles]);

  const handleCardClick = (cardType) => {
    setSelectedCardType(cardType);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedCardType(null);
    setIsModalOpen(false);
    setName("");
    setDescription("");
  };

  const handleModalSubmit = ({ file_name, description }) => {
    const projectFileBody = {
      file_name,
      description,
      project_id: id,
    };

    const project_id = id;

    dispatch(CreateProjectFiles({ projectFileBody, project_id }));
    handleModalClose();
  };

  return (
    <div>
      {loading ? (
        <Flex
          width="100%"
          height="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner size="xl" color="#7e22ce" />
        </Flex>
      ) : (
        <div>
          <Box width={"100%"} margin={"auto"} marginTop={"90px"}>
            <Heading
              color={"rgba(126, 34, 206, 1)"}
              fontWeight={700}
              fontSize={["20px", "43.41px", "63.41px"]}
              lineHeight={"86.03px"}
              marginLeft={"100px"}
            >
              Upload
            </Heading>

            <Box width={"80%"} margin={"auto"} marginTop={"90px"}>
              {/* Cards */}
              <Box
                display={"grid"}
                w={"920px"}
                gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
                gap={4}
                marginTop={8}
              >
                <Card
                  onClick={() => handleCardClick("YouTube")}
                  width={"290px"}
                  height={"129px"}
                  borderRadius={"20px"}
                >
                  {/* ... (YouTube card content) */}
                  <CardBody>
                    <Flex>
                      <Image src={YT} width={"84px"} height={"82px"}></Image>
                      <Box
                        width={"177px"}
                        fontWeight={700}
                        color={"rgba(60, 60, 60, 1)"}
                        marginLeft={"11px"}
                      >
                        <Text fontSize={"20px"}>Upload Youtube Video</Text>
                      </Box>
                    </Flex>
                  </CardBody>
                </Card>
                <Card
                  onClick={() => handleCardClick("Spotify")}
                  width={"290px"}
                  height={"129px"}
                  borderRadius={"20px"}
                >
                  {/* ... (Spotify card content) */}
                  <CardBody>
                    <Flex>
                      <Image
                        src={Spotify}
                        width={"84px"}
                        height={"82px"}
                      ></Image>
                      <Box
                        width={"177px"}
                        fontWeight={700}
                        color={"rgba(60, 60, 60, 1)"}
                        marginLeft={"11px"}
                      >
                        <Text fontSize={"20px"}>Upload Spotify Podcast</Text>
                      </Box>
                    </Flex>
                  </CardBody>
                </Card>
                <Card
                  onClick={() => handleCardClick("RSS")}
                  width={"290px"}
                  height={"129px"}
                  borderRadius={"20px"}
                >
                  {/* ... (RSS card content) */}
                  <CardBody>
                    <Flex>
                      <Image src={RSS} width={"84px"} height={"82px"}></Image>
                      <Box
                        width={"177px"}
                        fontWeight={700}
                        color={"rgba(60, 60, 60, 1)"}
                        marginLeft={"11px"}
                      >
                        <Text fontSize={"20px"}>Upload From RSS Feed</Text>
                      </Box>
                    </Flex>
                  </CardBody>
                </Card>
              </Box>

              <Box w={"60px"} h={"55px"} margin={"auto"} marginTop={"30px"}>
                <Text
                  fontSize={"30px"}
                  color={"rgba(153, 153, 153, 1)"}
                  textAlign={"center"}
                >
                  Or
                </Text>
              </Box>
              {projectfiles.length ? (
                <SampleProject projectfiles={projectfiles} project_id={id} />
              ) : (
                <Box
                  width={"860px"}
                  h={"295px"}
                  margin={"auto"}
                  marginTop={"30px"}
                  border={"4px dotted rgba(153, 153, 153, 1)"}
                  borderRadius={"20px"}
                >
                  <Image src={cloud_upload} margin={"auto"}></Image>
                  <Text textAlign={"center"} fontSize={"20px"}>
                    Select a file or drag and drop here (Podcast Media or
                    Transcription Text)
                  </Text>
                  <Text
                    textAlign={"center"}
                    fontSize={"16px"}
                    color={"rgba(0, 0, 0, 0.4)"}
                  >
                    MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
                  </Text>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    marginTop={"20px"}
                  >
                    <Button
                      w={"150px"}
                      _hover={"white"}
                      border={"1.93px solid rgba(126, 34, 206, 1)"}
                      borderRadius={"20px"}
                      color={"rgba(126, 34, 206, 1)"}
                      backgroundColor={"white"}
                    >
                      Select File
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </div>
      )}
      {/* Common Modal */}
      <CommonModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        cardType={selectedCardType}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
};

export default Uploaded;
