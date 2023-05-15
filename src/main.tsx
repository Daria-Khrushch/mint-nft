import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { WalletProvider, SuiDevnetChain,
  SuiTestnetChain
} from "@suiet/wallet-kit";
  import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@suiet/wallet-kit/style.css";

const SupportedChains = [
  // ...DefaultChains,
  SuiDevnetChain,
  SuiTestnetChain,
  // NOTE: you can add custom chain (network),
  // but make sure the connected wallet does support it
  // customChain,
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WalletProvider chains={SupportedChains}>
      <App />
      <ToastContainer autoClose={5000} position="top-center" />
    </WalletProvider>
  </React.StrictMode>
);
