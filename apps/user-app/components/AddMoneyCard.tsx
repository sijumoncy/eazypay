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
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/",
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
    await createOnRampTransaction(Number(amount), provider);
    window.location.href = redirectUrl || "";
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
          <Button variant={"default"} onClick={() => handleAddMoney()}>Add Money</Button>
        </div>
      </div>
    </CardTransfer>
  );
};
