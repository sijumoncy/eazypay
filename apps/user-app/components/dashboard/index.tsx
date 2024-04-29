import Box from "@repo/ui/box";
import React from "react";
import CreditCard from "@repo/ui/creditcard";
import StatusCard from "@repo/ui/statuscard";
import DataTable from "@repo/ui/datatable";
import { employeeColumns } from "./column";

const statusDummyData = [
  {
    id: 1,
    title: "Total Transfer",
    content: "1000",
    subContent: "",
  },
  { id: 2, title: "Total Success", content: "800", subContent: "" },
  { id: 3, title: "Total Failed", content: "198", subContent: "" },
  { id: 4, title: "Total Pending", content: "2", subContent: "" },
];

const tableDummyData = [
  {
    id: "1",
    name: "John Doe",
    department: "HR",
    email: "john.doe@example.com",
    location: "New York",
    status: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    department: "IT",
    email: "jane.smith@example.com",
    location: "San Francisco",
    status: "vacation",
  },
  {
    id: "3",
    name: "Bob Johnson",
    department: "Finance",
    email: "bob.johnson@example.com",
    location: "Chicago",
    status: "other leave",
  },
  {
    id: "4",
    name: "Alice Brown",
    department: "Marketing",
    email: "alice.brown@example.com",
    location: "Denver",
    status: "left",
  },
  {
    id: "5",
    name: "David Wilson",
    department: "Sales",
    email: "david.wilson@example.com",
    location: "Houston",
    status: "active",
  },
  {
    id: "6",
    name: "Emily Taylor",
    department: "Engineering",
    email: "emily.taylor@example.com",
    location: "Denver",
    status: "vacation",
  },
  {
    id: "7",
    name: "Michael Lee",
    department: "IT",
    email: "michael.lee@example.com",
    location: "Seattle",
    status: "other leave",
  },
  {
    id: "8",
    name: "Olivia Hernandez",
    department: "Finance",
    email: "olivia.hernandez@example.com",
    location: "Denver",
    status: "left",
  },
  {
    id: "9",
    name: "Sophia Martinez",
    department: "Marketing",
    email: "sophia.martinez@example.com",
    location: "Atlanta",
    status: "active",
  },
  {
    id: "10",
    name: "James Adams",
    department: "Sales",
    email: "james.adams@example.com",
    location: "New York",
    status: "vacation",
  },
  {
    id: "11",
    name: "James Frost",
    department: "Finance",
    email: "james.frost@example.com",
    location: "Denver",
    status: "active",
  },
  {
    id: "12",
    name: "Lucy Heinz",
    department: "IT",
    email: "lucy.heinz@example.com",
    location: "New York",
    status: "active",
  },
];

function DashBoard() {
  return (
    <div className="pt-5 flex flex-col gap-5">
      {/* quick statics */}
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {statusDummyData.map((item) => (
          <div className="bg-[var(--theme-light)]">
            <StatusCard
              key={item.id}
              Content={item.content}
              title={item.title}
              subContent={item.subContent}
            />
          </div>
        ))}
      </div>

      {/* overview wallet*/}
      <div className="max-w-[500px]">
        <Box className="w-full h-full shadow-box ">
          <CreditCard balance={123456} accHolder="Alice" className="border" />
        </Box>
      </div>

      {/* recent transactions */}
      <div className="w-full min-h-14">
        <Box className="w-full h-full shadow-box border mx-auto">
          <DataTable data={tableDummyData} columns={employeeColumns} />
        </Box>
      </div>
    </div>
  );
}

export default DashBoard;
