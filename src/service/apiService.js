// import { fetchData } from '../utils/api';

// const getExampleData = async () => {
//   return await fetchData('/example-endpoint');
// };

// export { getExampleData };

import fakeData from '../data/fakedata';

const getTasks = async () => {
  return fakeData.tasks;
};

const getTaskById = async (id) => {
  return fakeData.tasks.find(task => task.id === id);
};

export { getTasks, getTaskById };
