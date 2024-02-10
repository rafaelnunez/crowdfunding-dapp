import { ChainId, ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { Sepolia } from "@thirdweb-dev/chains"
import App from "./App"
import "./index.css"
import { StateContextProvider } from "./context"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <ThirdwebProvider
    activeChain={Sepolia}
    clientId={Sepolia.chainId.toString()}
    supportedWallets={[metamaskWallet()]}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)
