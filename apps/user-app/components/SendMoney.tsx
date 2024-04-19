"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textInput";
import { useState } from "react";

export function SendMoney() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="h-[70vh]">
      <Center>
        <Card title="Send">
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
              <Button onClick={() => {}}>Send</Button>
            </div>
          </div>
        </Card>
      </Center>
    </div>
  );
}
