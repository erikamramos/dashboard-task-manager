import { Task } from "@/interfaces";

export interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}