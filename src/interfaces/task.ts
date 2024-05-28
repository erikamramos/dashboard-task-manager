/* export interface Task {
	code: string;
	task: string;
	description: string;
	status: string;
	dateInit: string;
	dateEnd: string;
	progress: string;
	subtasks?: any[] | Task[];
  plannedAmount: string | number;
  committedAmount: string | number;
} */

export interface Task {
  code: string;
  task: string;
  description: string;
  status: string;
  dateInitPlanned: string;
  dateEndPlanned: string;
  dateInitReal: string;
  dateEndReal: string;
  progressPlanned: string;
  progressReal: string;
  plannedAmount: number;
  committedAmount: number;
  amt?: number; // Opcional porque algunas tareas podrían no tener este campo
  subtasks?: any[] | Task[];
}