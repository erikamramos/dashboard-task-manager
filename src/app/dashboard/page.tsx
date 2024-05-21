/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */
/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";
import { MoreHorizontal, ChevronRight, Pencil } from "lucide-react"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LineChart from "@/components/LineChart";
import Card, { CardContent, CardProps } from "@/components/Card";
import { Task } from "@/interfaces";


type Props = {};
type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Task>[] = [
  {
    id: "subtask",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "code",
    header: "Código"
  },
  {
    accessorKey: "task",
    header: "Tarea"
  },
  {
    accessorKey: "dateInit",
    header: "Fecha de Inicio "
  },
  {
    accessorKey: "dateEnd",
    header: "Fecha Fin "
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
            "bg-red-200": row.getValue("status") === "Fuera de tiempo"
          })}
        >
          {row.getValue("status")}
        </div>
      );
    }
  },
  {
    accessorKey: "progress",
    header: "Progreso"
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      )
    },
  },
];

const data: Task[] = [
  {
    code: "PR-102",
    task: "Inicio de proyecto",
    description: "Envio de propuesta, presupuesto",
    status: "Finalizado",
    dateInit: "2024-05-01",
    dateEnd: "2024-05-01",
    progress: "100%"
  },
  {
    code: "PR-103",
    task: "Definición de requerimientos",
    description: "Reunión con stakeholders, documentación",
    status: "Finalizado",
    dateInit: "2024-05-02",
    dateEnd: "2024-05-03",
    progress: "100%"
  },
  {
    code: "PR-104",
    task: "Análisis de factibilidad",
    description: "Evaluación técnica y económica",
    status: "Finalizado",
    dateInit: "2024-05-04",
    dateEnd: "2024-05-05",
    progress: "100%"
  },
  {
    code: "PR-105",
    task: "Planificación del proyecto",
    description: "Cronograma y asignación de recursos",
    status: "En Progreso",
    dateInit: "2024-05-06",
    dateEnd: "2024-05-07",
    progress: "60%"
  },
  {
    code: "PR-106",
    task: "Diseño del sistema",
    description: "Creación de wireframes y diagramas",
    status: "En Progreso",
    dateInit: "2024-05-08",
    dateEnd: "2024-05-10",
    progress: "30%"
  },
  {
    code: "PR-107",
    task: "Desarrollo del backend",
    description: "Implementación de la lógica del servidor",
    status: "Fuera de tiempo",
    dateInit: "2024-05-11",
    dateEnd: "2024-05-20",
    progress: "0%"
  },
  {
    code: "PR-108",
    task: "Desarrollo del frontend",
    description: "Creación de la interfaz de usuario",
    status: "Pendiente",
    dateInit: "2024-05-21",
    dateEnd: "2024-05-30",
    progress: "0%"
  },
  {
    code: "PR-109",
    task: "Integración del sistema",
    description: "Unificación de frontend y backend",
    status: "Pendiente",
    dateInit: "2024-05-31",
    dateEnd: "2024-06-05",
    progress: "0%"
  },
  {
    code: "PR-110",
    task: "Pruebas unitarias",
    description: "Verificación de módulos individuales",
    status: "Pendiente",
    dateInit: "2024-06-06",
    dateEnd: "2024-06-10",
    progress: "0%"
  },
  {
    code: "PR-111",
    task: "Pruebas de integración",
    description: "Verificación de la integración de módulos",
    status: "Pendiente",
    dateInit: "2024-06-11",
    dateEnd: "2024-06-15",
    progress: "0%"
  },
  {
    code: "PR-112",
    task: "Pruebas de sistema",
    description: "Evaluación del sistema completo",
    status: "Pendiente",
    dateInit: "2024-06-16",
    dateEnd: "2024-06-20",
    progress: "0%"
  },
  {
    code: "PR-113",
    task: "Pruebas de aceptación",
    description: "Validación con el cliente",
    status: "Pendiente",
    dateInit: "2024-06-21",
    dateEnd: "2024-06-25",
    progress: "0%"
  },
  {
    code: "PR-114",
    task: "Capacitación del usuario",
    description: "Entrenamiento a los usuarios finales",
    status: "Pendiente",
    dateInit: "2024-06-26",
    dateEnd: "2024-06-30",
    progress: "0%"
  },
  {
    code: "PR-115",
    task: "Implementación",
    description: "Despliegue del sistema en producción",
    status: "Pendiente",
    dateInit: "2024-07-01",
    dateEnd: "2024-07-05",
    progress: "0%"
  },
  {
    code: "PR-116",
    task: "Soporte inicial",
    description: "Resolución de problemas post-implementación",
    status: "Pendiente",
    dateInit: "2024-07-06",
    dateEnd: "2024-07-10",
    progress: "0%"
  },
  {
    code: "PR-117",
    task: "Evaluación post-implementación",
    description: "Revisión del rendimiento del sistema",
    status: "Pendiente",
    dateInit: "2024-07-11",
    dateEnd: "2024-07-15",
    progress: "0%"
  },
  {
    code: "PR-118",
    task: "Documentación final",
    description: "Creación de documentos finales",
    status: "Pendiente",
    dateInit: "2024-07-16",
    dateEnd: "2024-07-20",
    progress: "0%"
  },
  {
    code: "PR-119",
    task: "Entrega final",
    description: "Entrega del proyecto al cliente",
    status: "Pendiente",
    dateInit: "2024-07-21",
    dateEnd: "2024-07-25",
    progress: "0%"
  },
  {
    code: "PR-120",
    task: "Cierre del proyecto",
    description: "Cierre administrativo y financiero",
    status: "Pendiente",
    dateInit: "2024-07-26",
    dateEnd: "2024-07-30",
    progress: "0%"
  },
  {
    code: "PR-121",
    task: "Revisión de lecciones aprendidas",
    description: "Análisis de lo aprendido durante el proyecto",
    status: "Pendiente",
    dateInit: "2024-07-31",
    dateEnd: "2024-08-04",
    progress: "0%"
  },
  {
    code: "PR-122",
    task: "Mantenimiento",
    description: "Soporte y actualizaciones",
    status: "Pendiente",
    dateInit: "2024-08-05",
    dateEnd: "2024-08-09",
    progress: "0%"
  },
  {
    code: "PR-123",
    task: "Reunión de seguimiento",
    description: "Revisión periódica con el cliente",
    status: "Pendiente",
    dateInit: "2024-08-10",
    dateEnd: "2024-08-14",
    progress: "0%"
  },
  {
    code: "PR-124",
    task: "Auditoría interna",
    description: "Revisión de procesos y resultados",
    status: "Pendiente",
    dateInit: "2024-08-15",
    dateEnd: "2024-08-19",
    progress: "0%"
  },
  {
    code: "PR-125",
    task: "Actualización de software",
    description: "Aplicación de parches y mejoras",
    status: "Pendiente",
    dateInit: "2024-08-20",
    dateEnd: "2024-08-24",
    progress: "0%"
  },
  {
    code: "PR-126",
    task: "Monitoreo de rendimiento",
    description: "Supervisión continua del sistema",
    status: "Pendiente",
    dateInit: "2024-08-25",
    dateEnd: "2024-08-29",
    progress: "0%"
  },
  {
    code: "PR-127",
    task: "Gestión de incidencias",
    description: "Resolución de problemas operativos",
    status: "Pendiente",
    dateInit: "2024-08-30",
    dateEnd: "2024-09-03",
    progress: "0%"
  },
  {
    code: "PR-128",
    task: "Actualización de la documentación",
    description: "Revisión y actualización de documentos",
    status: "Pendiente",
    dateInit: "2024-09-04",
    dateEnd: "2024-09-08",
    progress: "0%"
  },
  {
    code: "PR-129",
    task: "Evaluación de resultados",
    description: "Análisis de los resultados del proyecto",
    status: "Pendiente",
    dateInit: "2024-09-09",
    dateEnd: "2024-09-13",
    progress: "0%"
  },
];

export default function OrdersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <div>
        <div className="flex justify-between items-center">
          <PageTitle title="Proyecto A" />
          <Button className="text-sm bg-black text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400">
            <Pencil className="h-4 w-4 mr-2" /> 
            Editar
          </Button>
        </div>
        <p className="mt-2 text-gray-600">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
        </p>
      </div>

      
      <CardContent>
        <div className="p-4 h-[50vh]">
          <LineChart />
        </div>
      </CardContent>
      <CardContent>
        <div className="p-4">
          <DataTable columns={columns} data={data} />
        </div>
      </CardContent>
    </div>
  );
}
