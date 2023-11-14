import { FETCH_PROJECTS, FETCH_PROJECTS_FAILURE } from "./projects.actiontype";

//Get Projects
export const fetchProjects = (userEmail) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://gold-wide-eyed-rabbit.cyclic.app/project/all?userEmail=${userEmail}`
    );

    const data = await response.json();

    try {
      dispatch({ type: FETCH_PROJECTS, payload: data.data });
    } catch (error) {
      dispatch({ type: FETCH_PROJECTS_FAILURE, payload: error });
    }
  } catch (error) {
    dispatch({ type: FETCH_PROJECTS_FAILURE, payload: error.message });
  }
};

//Create Project
export const CreateProjectsFunction =
  ({ projectBody, userEmail }) =>
  async (dispatch) => {
    try {
      await fetch("https://gold-wide-eyed-rabbit.cyclic.app/project/create", {
        method: "POST",
        body: JSON.stringify(projectBody),
        headers: {
          "Content-Type": "application/json",
          Authorization: JSON.stringify(userEmail),
        },
      }).then((res) => {
        if (res.status === 200) {
          dispatch(fetchProjects(userEmail));
        }
      });
    } catch (error) {
      console.error("Error during fetch:", error.message);
    }
  };
