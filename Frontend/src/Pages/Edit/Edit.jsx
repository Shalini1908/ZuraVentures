import {
  Box,
  Button,
  Heading,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProjectFile } from "../../Redux/projectsFiles/projectFiles.action";
import { useParams } from "react-router";

const Edit = () => {
  const { onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [transcript, setTranscript] = useState("");
  const [loading, showLoading] = useState(false);
  const { id } = useParams();

  async function getFile() {
    showLoading(true);
    try {
      let res = await fetch(`https://gold-wide-eyed-rabbit.cyclic.app/projectfile/${id}`);
      let data = await res.json();

      if (res.ok) {
        setTranscript(data.description);
      } else {
        console.error("Failed to fetch data:", data);
      }

      showLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      showLoading(false);
    }
  }

  useEffect(() => {
    getFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSaveAndExit = () => {
    if (transcript) {
      showLoading(true);
      dispatch(
        updateProjectFile({
          description: transcript,
          id,
        })
      ).then(() => {
        getFile();
        showLoading(false);
      });
    }
  };

  const handleDiscard = () => {
    setTranscript("");
    onClose();
  };

  return (
    <>
      {loading ? (
        "loading...."
      ) : (
        <Box>
          <Box
            gap={10}
            width={"70%"}
            margin={"auto"}
            marginTop={"50px"}
            display={"flex"}
            justifyContent={"right"}
            alignItems={"center"}
          >
            <Button
              _hover={"none"}
              color={"rgba(255, 39, 76, 1)"}
              border={"1px solid rgba(255, 39, 76, 1)"}
              width={"148px"}
              height={"50px"}
              onClick={handleDiscard}
            >
              Discard
            </Button>
            <Button
              backgroundColor={"rgba(33, 25, 53, 1)"}
              color={"white"}
              width={"148px"}
              height={"50px"}
              _hover={"rgba(33, 25, 53, 1)"}
              onClick={handleSaveAndExit}
            >
              Save & Exit
            </Button>
          </Box>
          <Box
            height="70vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="70%" h={"auto"}>
              <Heading
                color="rgba(126, 34, 206, 1)"
                fontSize="32px"
                textAlign="left"
                padding="20px"
              >
                Edit Transcript
              </Heading>
              <Box padding="20px">
                <Textarea
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  width="100%"
                  h={"300px"}
                  fontSize="20px"
                  size="lg"
                  resize="none"
                  style={{ overflowY: "auto", paddingTop: "10px" }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Edit;
