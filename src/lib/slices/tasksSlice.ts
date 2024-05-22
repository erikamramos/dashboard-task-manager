// redux/tasksSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Task } from '@/interfaces';
import { getTasks } from '@/service/apiService';
import { TasksState } from './interfaces/tasksState';

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: null,
};

// Async thunk para obtener las tareas
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await getTasks();
  return response;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch tasks';
      });
  },
});

export default tasksSlice.reducer;
