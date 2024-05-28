import Box from "@repo/ui/box";
import React from "react";
import CreditCard from "@repo/ui/creditcard";
import StatusCard from "@repo/ui/statuscard";
import { DataTable } from "@repo/ui/datatable";
import { employeeColumns } from "./column";
import { Texts } from "@repo/ui/texts";
import { getCurrentUserTransferAndOnRamp } from "../../lib/actions/p2ptransfer";

const statusData = {
  total: {
    id: 1,
    title: "Total Transfer",
    content: 0,
    subContent: "",
    className: "bg-primary text-bgClr",
  },
  success: {
    id: 2,
    title: "Total Success",
    content: 0,
    subContent: "",
    className: "bg-[var(--success)] text-bgClr",
  },
  failed: {
    id: 3,
    title: "Total Failed",
    content: 0,
    subContent: "",
    className: "bg-[var(--danger)] text-bgClr",
  },
  pending: {
    id: 4,
    title: "Total Pending",
    content: 0,
    subContent: "",
    className: "bg-[var(--warning)] text-bgClr",
  },
};

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

async function DashBoard() {
  try {
    const data = await getCurrentUserTransferAndOnRamp();

    if (data) {
      // total
      statusData.total.content =
        data.p2pTransactions.length + data.onRampTransactions.length;

      // success
      const onRampSuccess = data.onRampTransactions.reduce(
        (acc, item) => (item.status === "Success" ? acc + 1 : acc + 0),
        0
      );
      statusData.success.content = data.p2pTransactions.length + onRampSuccess;

      // pending
      const onRampPending = data.onRampTransactions.reduce(
        (acc, item) => (item.status === "Processing" ? acc + 1 : acc + 0),
        0
      );
      statusData.pending.content = onRampPending;

      // failed
      const onRampFailed = data.onRampTransactions.reduce(
        (acc, item) => (item.status === "Failure" ? acc + 1 : acc + 0),
        0
      );
      statusData.failed.content = onRampFailed;
    }
  } catch (err) {
    console.log("Error : ", err);
  }

  return (
    <div className="pt-5 flex flex-col gap-5">
      {/* quick statics */}
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {Object.entries(statusData).map(([key, data]) => (
          <div className="">
            <StatusCard
              key={data.id}
              Content={data.content.toString()}
              title={data.title}
              subContent={data.subContent}
              className={data.className}
            />
          </div>
        ))}
      </div>

      {/* overview wallet*/}
      <div className="grid grid-cols-1 gap-2 ">
        <Box className="max-w-[500px] w-full h-full shadow-box relative flex justify-center ">
          <CreditCard
            balance={123456}
            accHolder="Alice"
            className="border-2 border-green-500"
            joinedOn="01/24"
          />
        </Box>
      </div>

      {/* recent transactions */}
      <div className="w-full min-h-14 pb-4">
        <Box className="w-full h-full shadow-box border mx-auto">
          <div className="py-2 flex flex-col gap-1">
            <Texts variant={"cardHead"}>Recent Transactions</Texts>
            <Texts colors={"muted"}>
              Quick view of recent transactions details
            </Texts>
          </div>
          {/* the column data need to changed with actual data later */}
          <DataTable data={tableDummyData} columns={employeeColumns} />
        </Box>
      </div>
    </div>
  );
}

export default DashBoard;
