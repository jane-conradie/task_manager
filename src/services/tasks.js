import axios from "axios";

const baseUrl = `http://localhost:3001/tasks`;

// holds all functionality to get, edit, and delete tasks
const getAll = () => {
  return axios.get(baseUrl);
};

const editTask = ({ id }) => {};

const deleteTask = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const addTask = (task) => {
  return axios.post(baseUrl, task);
};

export default {
  getAll: getAll,
  editTask: editTask,
  deleteTask: deleteTask,
  addTask: addTask,
};
