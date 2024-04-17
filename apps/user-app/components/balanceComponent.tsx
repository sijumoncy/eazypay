"use client";
import React from 'react'
import {useBalance} from "@repo/store/useBalance"

function BalanceComponent() {

  const balance = useBalance()

  return (
    <div>clientComponent Balance Atom value : {balance}</div>
  )
}

export default BalanceComponent