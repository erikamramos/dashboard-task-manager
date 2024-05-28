/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */
/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React, { useState, useEffect } from "react";
import PageTitle from "@/components/PageTitle";
import { MoreHorizontal, ChevronRight, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LineChart from "@/components/LineChart";
import LineChartV2 from "@/components/LineChartV2";
import { CardContent } from "@/components/Card";
import { Task } from "@/interfaces";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { getTasks } from "@/service/apiService";

type Props = {};

export default function DashboardPage({}: Props) {
	const [data, setData] = useState<Task[]>([]);
	const [currentTab, setCurrentTab] = useState<string>("all");
	const [tabs, setTabs] = useState<string[]>(["all"]);

	useEffect(() => {
		const fetchTasks = async () => {
			const tasks = await getTasks();
			setData(tasks);
		};

		fetchTasks();
	}, []);

	const addSubtasksToTable = (taskId: string) => {
		const taskIndex = data.findIndex((task) => task.code === taskId);
		if (taskIndex !== -1) {
			const task = data[taskIndex];
			if (task.subtasks) {
				setTabs((prevTabs) => {
					const allTabIndex = prevTabs.indexOf("all");
					const newTabs = [
						...prevTabs.slice(0, allTabIndex + 1),
						...prevTabs.slice(allTabIndex + 1),
						task.code,
					];
					return newTabs;
				});
				setCurrentTab(task.code);
			}
		}
	};

	const columns: ColumnDef<Task>[] = [
		{
			id: "subtask",
			enableHiding: false,
			cell: ({ row }) => {
				const task = row.original;
				return (
					<Button
						variant="ghost"
						className="h-8 w-8 p-0"
						onClick={() => addSubtasksToTable(task.code)}
					>
						<span className="sr-only">Open menu</span>
						<ChevronRight className="h-4 w-4" />
					</Button>
				);
			},
		},
		{
			accessorKey: "code",
			header: "Código",
		},
		{
			accessorKey: "task",
			header: "Tarea",
		},
		{
			accessorKey: "dateInitPlanned",
			header: "Fecha de Inicio Planeado",
		},
		{
			accessorKey: "dateEndPlanned",
			header: "Fecha Fin Planeado",
		},
		{
			accessorKey: "dateInitReal",
			header: "Fecha de Inicio Actual ",
		},
		{
			accessorKey: "dateEndReal",
			header: "Fecha Fin Actual",
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }) => {
				return (
					<div
						className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
							"bg-blue-200": row.getValue("status") === "Pendiente",
							"bg-orange-200": row.getValue("status") === "En Progreso",
							"bg-green-200": row.getValue("status") === "Finalizado",
							"bg-red-200": row.getValue("status") === "Fuera de tiempo",
						})}
					>
						{row.getValue("status")}
					</div>
				);
			},
		},
		{
			accessorKey: "progressPlanned",
			header: "Progreso Planeado",
		},
		{
			accessorKey: "progressReal",
			header: "Progreso Actual",
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }) => {
				const payment = row.original;

				return (
					<Button variant="ghost" className="h-8 w-8 p-0">
						<span className="sr-only">Open menu</span>
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				);
			},
		},
	];

	const getTabData = (tab: string) => {
		if (tab === "all") {
			return data;
		}
		const task = data.find((task) => task.code === tab);
		return task?.subtasks || [];
	};


	const getNameTask = (tab: string) => {
		if (tab === "all") {
			return data;
		}
		const task = data.find((task) => task.code === tab);
		return task?.task || '';
	};

	return (
		<div className="flex flex-col gap-5 w-full">
			<div>
				<div className="flex justify-between items-center">
          <h1 className={cn("text-2xl font-semibold")}>Proyecto A {currentTab === "all" ? "" : ` - ${getNameTask(currentTab)}`}</h1>;
					<Button className="text-sm bg-black text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400">
						<Pencil className="h-4 w-4 mr-2" />
						Editar
					</Button>
				</div>
				{/* <p className="mt-2 text-gray-600">
					Lorem Ipsum has been the industrys standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it.
				</p>*/}
			</div>

			<CardContent>
				<div className="p-4 space-y-6">
					<div className="">
						<Tabs defaultValue="all" className="h-full space-y-6" value={currentTab}>
							<TabsList>
								{tabs.map((tab) => (
									<TabsTrigger
										key={tab}
										value={tab}
										className="relative"
										onClick={() => setCurrentTab(tab)}
									>
										{tab === "all" ? "All" : tab}
									</TabsTrigger>
								))}
							</TabsList>
							{tabs.map((tab) => (
								<TabsContent
									key={tab}
									value={tab}
									className="border-none p-0 outline-none w-full"
								>
									<div className="h-[50vh]">
										{tab === "all" ? (
											<LineChart data={data} width={500} height={300} />
										) : (
											<LineChart data={getTabData(tab)} width={500} height={300} />
										)}
									</div>
								</TabsContent>
							))}
						</Tabs>
					</div>
				</div>
			</CardContent>

			<CardContent>
				<div className="p-4 space-y-6">
					<div className="">
						<Tabs defaultValue="all" className="h-full space-y-6" value={currentTab}>
							<TabsList>
								{tabs.map((tab) => (
									<TabsTrigger
										key={tab}
										value={tab}
										className="relative"
										onClick={() => setCurrentTab(tab)}
									>
										{tab === "all" ? "All" : tab}
									</TabsTrigger>
								))}
							</TabsList>
							{tabs.map((tab) => (
								<TabsContent
									key={tab}
									value={tab}
									className="border-none p-0 outline-none w-full"
								>
									<div>
										{tab === "all" ? (
											<DataTable columns={columns} data={data} />
										) : (
											<DataTable columns={columns} data={getTabData(tab)} />
										)}
									</div>
								</TabsContent>
							))}
						</Tabs>
					</div>
				</div>
			</CardContent>
		</div>
	);
}
