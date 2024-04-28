import Box from "@repo/ui/box";
import React from "react";
import CreditCard from "@repo/ui/creditcard";
import StatusCard from "@repo/ui/statuscard";
("@repo/ui/statuscard");

function DashBoard() {
  return (
    <div className="pt-5 flex flex-col gap-5">
      {/* quick statics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        <StatusCard />
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
