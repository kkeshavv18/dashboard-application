"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "@/types/types";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: () => <div className="">ID</div>,

    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },

  {
    accessorKey: "firstName",
    header: () => <div className="">First Name</div>,
    cell: ({ row }) => {
      return <div>{row.getValue("firstName")}</div>;
    },
  },
  {
    accessorKey: "lastName",
    header: () => <div className="">Last Name</div>,
    cell: ({ row }) => {
      return <div>{row.getValue("lastName")}</div>;
    },
  },
  {
    accessorKey: "email",
    header: () => <div className="">Email</div>,
    cell: ({ row }) => {
      return <div>{row.getValue("email")}</div>;
    },
  },
  {
    accessorKey: "phone",
    header: () => <div className="">Phone</div>,
    cell: ({ row }) => {
      return <div>{row.getValue("phone")}</div>;
    },
  },
  {
    accessorKey: "age",
    header: () => <div className="">Age</div>,
    cell: ({ row }) => {
      return <div>{row.getValue("age")}</div>;
    },
  },
  {
    accessorKey: "gender",
    header: () => <div className="">Gender</div>,
    cell: ({ row }) => {
      return <div>{row.getValue("gender")}</div>;
    },
  },
];
