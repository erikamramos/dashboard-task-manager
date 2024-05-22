// import { fetchData } from '../utils/api';

import { Task } from "@/interfaces";

// const getExampleData = async () => {
//   return await fetchData('/example-endpoint');
// };

// export { getExampleData };

const fakeData = require('../data/fakedata').default;

export const getTasks = async () => {
  return fakeData.tasks;
};

export const getTaskById = async (id: any) => {
  return fakeData.tasks.find((task: Task) => task.code === id);
};
