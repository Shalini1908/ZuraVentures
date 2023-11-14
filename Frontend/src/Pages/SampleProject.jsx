import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProjectFile } from "../Redux/projectsFiles/projectFiles.action";

const SampleProject = ({ projectfiles , project_id }) => {
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const DeleteProduct = (id) => {
   dispatch(deleteProjectFile({id, project_id}))
  };

  const openTranscript = (file_id) => {
    navigate(`/transcript/${file_id}`);
  };

  return (
    <>
      <TableContainer
        fontSize={"14px"}
        width={"80%"}
        height={"auto"}
        border={"1px solid rgba(153, 153, 153, 1)"}
        borderRadius={"22px"}
        margin={"auto"}
        marginTop={"30px"}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color={"rgba(60, 60, 60, 1)"} fontSize={"16px"}>
                Name
              </Th>
              <Th color={"rgba(60, 60, 60, 1)"} fontSize={"16px"}>
                Upload Date & Time
              </Th>
              <Th color={"rgba(60, 60, 60, 1)"} fontSize={"16px"}>
                Status
              </Th>
              <Th
                textAlign={"center"}
                color={"rgba(60, 60, 60, 1)"}
                fontSize={"16px"}
              >
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {projectfiles.map((project) => (
              <Tr key={project.id}>
                <Td fontSize={"14px"}>{project.file_name}</Td>
                <Td>
                  {new Date(project.createdAt)
                    .toLocaleString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })
                    .replace(",", " | ")}
                </Td>
                <Td>{project.description}</Td>
                <Td
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                
                    onClick={() => DeleteProduct(project._id)}
                    w={50}
                    h={50}
                    marginRight={2}
                  >
                    <MdDelete fontSize={15} color={"rgba(126, 34, 206, 1)"} />
                  </Button>
                  <FiEdit
                    fontSize={15}
                    color={"#ff912e"}
                    onClick={() => openTranscript(project._id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SampleProject;
