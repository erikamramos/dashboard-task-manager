export interface Task {
	code: string;
	task: string;
	description: string;
	status: string;
	dateInit: string;
	dateEnd: string;
	progress: string;
	subtasks?: any[];
}
