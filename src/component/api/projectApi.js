import axios from "axios";

// let url = "https://nadeem-personal-portfolio.herokuapp.com/api";
let url = process.env.REACT_APP_PROJECT_API;

export const getProject = () => axios.get(`${url}/projects`);
export const deleteProject = (id) => axios.delete(`${url}/projects/${id}`);
export const updateProject = (updateProject, id) =>
  axios.patch(`${url}/projects/${id}`, updateProject);
export const addProject = (newProject) =>
  axios.post(`${url}/addproject`, newProject);
