"use client";
import { Button } from "@repo/ui/button";
import { CardTransfer } from "@repo/ui/cardtransfer";
import { Select } from "@repo/ui/select";
import { useState } from "react";
import { TextInput } from "@repo/ui/textInput";
import { createOnRampTransaction } from "../lib/actions/createOnRampTransaction";

const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    // redirectUrl: "https://netbanking.hdfcbank.com",
    redirectUrl: "http://localhost:8003",
  },
  {
    name: "Axis Bank",
    // redirectUrl: "https://www.axisbank.com/",
    redirectUrl: "http://localhost:8003",
  },
];

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl
  );
  const [amount, setAmount] = useState(0);
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");

  const handleAddMoney = async () => {
    //call server action
    const onRampInitedResp = await createOnRampTransaction(
      Number(amount),
      provider
    );
    console.log({ onRampInitedResp });
    if (onRampInitedResp && onRampInitedResp.token) {
      const { amount, token, userId } = onRampInitedResp;
      window.location.href = `${redirectUrl}?userId=${userId}&token=${token}&amount=${amount}`;
    } else {
      console.log(
        "Failed to init onRamp Transaction : ",
        onRampInitedResp?.message
      );
    }
  };

  return (
    <CardTransfer title="Add Money">
      <div className="w-full pt-2">
        <TextInput
          label={"How much you want to add?"}
          placeholder={"Amount"}
          value={amount}
          onChange={(value) => setAmount(Number(value))}
          type="number"
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 pt-5">
          Select Your Bank
        </label>
        <Select
          onSelect={(value) => {
            setRedirectUrl(
              SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || ""
            );
            setProvider(
              SUPPORTED_BANKS.find((x) => x.name === value)?.name || ""
            );
          }}
          options={SUPPORTED_BANKS.map((x) => ({
            key: x.name,
            value: x.name,
          }))}
        />
        <div className="flex justify-center pt-4">
          <Button variant={"default"} onClick={() => handleAddMoney()}>
            Add Money
          </Button>
        </div>
      </div>
    </CardTransfer>
  );
};
