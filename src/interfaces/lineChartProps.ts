import { Task } from "./task";

export interface LineChartProps {
  data: Task[] | Array<{ code: string, plannedAmount: number, committedAmount: number, amt: number } | any > | undefined;
  width: number;
  height: number;
}