import Box from "@repo/ui/box";
import React from "react";
import CreditCard from "@repo/ui/creditcard";

function DashBoard() {
  return (
    <div className="pt-5">
      {/* overview wallet*/}
      <div className="max-w-[500px] max-h-40 ">
        <Box className="w-full h-full shadow-box ">
          <CreditCard balance={123456} accHolder="Alice" className="border"/>
        </Box>
      </div>
    </div>
  );
}

export default DashBoard;
