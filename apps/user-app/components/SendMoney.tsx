"use client";
import { Button } from "@repo/ui/button";
import { CardTransfer } from "@repo/ui/cardtransfer";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textInput";
import { useState } from "react";
import { p2pTransfer } from "../lib/actions/p2ptransfer";

export function SendMoney() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMoney = async () => {
    try {
      setLoading(true);
      const response = await p2pTransfer(number, Number(amount) * 100);
      console.log({ response });
      setNumber("");
      setAmount("");
    } catch (err) {
      console.error("Send MOney Error : ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Center>
        <CardTransfer title="">
          <div className="min-w-72 pt-2">
            <TextInput
              label={"Number"}
              placeholder={"Number"}
              value={number}
              onChange={(value) => setNumber(value)}
              type="text"
            />
            <TextInput
              type="text"
              value={amount}
              placeholder={"Amount"}
              label="Amount"
              onChange={(value) => {
                setAmount(value);
              }}
            />
            <div className="pt-4 flex justify-center">
              <Button variant={"default"} onClick={() => handleSendMoney()}>
                {loading ? "SENDING" : "PAY"}
              </Button>
            </div>
          </div>
        </CardTransfer>
      </Center>
    </div>
  );
}
