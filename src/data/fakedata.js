const fakeData = {
  tasks: [
    {
      id: 1,
      name: "Main Task",
      description: "This is the main task",
      subtasks: [
        {
          id: 2,
          name: "Subtask 1",
          description: "This is a subtask of the main task",
          subtasks: [
            {
              id: 3,
              name: "Subtask 1.1",
              description: "This is a subtask of Subtask 1",
              subtasks: [
                {
                  id: 4,
                  name: "Subtask 1.1.1",
                  description: "This is a subtask of Subtask 1.1",
                  subtasks: []
                },
                {
                  id: 5,
                  name: "Subtask 1.1.2",
                  description: "This is another subtask of Subtask 1.1",
                  subtasks: []
                }
              ]
            },
            {
              id: 6,
              name: "Subtask 1.2",
              description: "This is another subtask of Subtask 1",
              subtasks: []
            }
          ],
          dependencies: [7]
        }
      ],
      dependencies: []
    },
    {
      id: 7,
      name: "Dependent Task",
      description: "This task is depended on by Subtask 1",
      subtasks: [],
      dependencies: []
    }
  ]
};

export default fakeData;
