import Box from "@repo/ui/box";
import React from "react";
import CreditCard from "@repo/ui/creditcard";
import StatusCard from "@repo/ui/statuscard";
("@repo/ui/statuscard");

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
      <div className="max-w-[500px] max-h-40 ">
        <Box className="w-full h-full shadow-box ">
          <CreditCard balance={123456} accHolder="Alice" className="border" />
        </Box>
      </div>
    </div>
  );
}

export default DashBoard;
