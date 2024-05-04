import Box from "@repo/ui/box";
import { Texts } from "@repo/ui/texts";
import React from "react";
import { SendMoney } from "../SendMoney";

function P2PSend() {
  return (
    <Box className="w-full h-full shadow-box border mx-auto mt-5">
      <div className="py-2 flex flex-col gap-1">
        <Texts variant={"cardHead"}>Pay Now</Texts>
        <Texts colors={"muted"}>
          Transfer money to anyone
        </Texts>
      </div>
      <div className="mt-5">
        <SendMoney />
      </div>
    </Box>
  );
}

export default P2PSend;
