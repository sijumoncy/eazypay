"use client"
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUp,
  CircleArrowLeft,
  CircleArrowRight,
  EllipsisVertical,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/dropdownmenu";

import { Checkbox } from "@repo/ui/checkbox";
import { Badge } from "@repo/ui/badge";
import { moveColumnsDown, moveColumnsUp } from "@repo/ui/tableUtils";

export interface Employee {
  id: string;
  name: string;
  department: string;
  email: string;
  location: string;
  status: "active" | "vacation" | "other leave" | "left";
}

export const employeeColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left">
          Name
          <ArrowUp
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    cell: ({ row }) => {
      const { name } = row.original;
      return <div className="font-medium text-left ">{name}</div>;
    },
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <CircleArrowLeft
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></CircleArrowLeft>
          <CircleArrowRight
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></CircleArrowRight>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <CircleArrowLeft
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></CircleArrowLeft>
          <CircleArrowRight
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></CircleArrowRight>
        </div>
      );
    },
  },
  {
    accessorKey: "department",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left">
          Department
          <ArrowUp
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <CircleArrowLeft
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></CircleArrowLeft>
          <CircleArrowRight
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></CircleArrowRight>
        </div>
      );
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left ">
          Location
          <ArrowUp
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("location")}</div>
    ),
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <CircleArrowLeft
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></CircleArrowLeft>
          <CircleArrowRight
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></CircleArrowRight>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="flex justify-between py-2 text-left">
          Status
          <ArrowUp
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    cell: ({ row }) => {
      const { status } = row.original;
      const colors = {
        active: "bg-green-500",
        vacation: "bg-yellow-500",
        "other leave": "bg-yellow-500",
        left: "bg-red-500",
      };

      return (
        <Badge
          variant="outline"
          className={`${colors[status]} text-white justify-center w-3/4`}
        >
          {status}
        </Badge>
      );
    },
    footer: ({ column, table }) => {
      return (
        <div className="flex flex-row gap-4">
          <CircleArrowLeft
            className="w-4 h-4 ml-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></CircleArrowLeft>
          <CircleArrowRight
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></CircleArrowRight>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
