// import { fetchData } from '../utils/api';

import { Task } from "@/interfaces";

// const getExampleData = async () => {
//   return await fetchData('/example-endpoint');
// };

// export { getExampleData };

const fakeData = require('../data/fakedata');

const getTasks = async () => {
  return fakeData.tasks;
};

const getTaskById = async (id: any) => {
  return fakeData.tasks.find((task: Task) => task.id === id);
};

module.exports = { getTasks, getTaskById };