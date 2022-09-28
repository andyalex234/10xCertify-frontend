/* global AlgoSigner */
import { useState } from "react";
import "./App.css";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  const [accounts, setAccounts] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState();

  const handleMenuClick = (e) => {
    console.log("click", e.key);
    setAccount(e.key)
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

  console.log("accounts", accounts);
  return (
    <div className="App">
      <h1>Hello There</h1>
      <button onClick={(_) => getAccounts()}>Connect to Algo wallet</button>
      {accounts && (
        <DropdownMenu
          items={accounts}
          handleMenuClick={handleMenuClick}
        />
      )}
    </div>
  );
}

export default App;
