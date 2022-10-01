/* global AlgoSigner */
import { useState } from "react";
import React from 'react'
import SelectAccount from "../components/SelectAccount";
import { Button } from 'antd';

export default function Auth() {
  const [accounts, setAccounts] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState();

  const handleMenuClick = (e) => {
    console.log("click", e.key);
    setAccount(e.key);
  };

  const getAccounts = async () => {
    try {
      await AlgoSigner.connect();
      const accounts = await AlgoSigner.accounts({
        ledger: "TestNet",
      });
      setAccounts(accounts);
      setIsConnected(true);
    } catch (error) {
      console.log("error", error);
    }
  };
  const selectAccount = (acc) => {
    setAccount(acc);
  };

  console.log("account", account);
  return (
      <div className="justify-center items-center grid place-items-center h-screen">
        <div className="flex flex-col">
          <div className="text-5xl tracking-widest font-extrabold">
            <h1>TenX-Certify</h1>
          </div>
          <div className="flex flex-col pt-20" onClick={(_) => getAccounts()}>
            <Button className="mb-10 bg-accent hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded items-center">
              Connect to Alog wallet
            </Button>
            {accounts && (
              <SelectAccount
                accounts={accounts}
                selected={account}
                setSelected={setAccount}
              />
            )}
          </div>
        </div>
      </div>
  )
}
