import "bootstrap/dist/css/bootstrap.css";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Router } from "./Router";
import { GlobalStyle } from "./GlobalStyle";

const client = new QueryClient();

function getLibrary(provider: any) {
  return new Web3Provider(provider);
}

function App() {
  return (
    <QueryClientProvider client={client}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <>
          <GlobalStyle />
          <Router />
        </>
      </Web3ReactProvider>
    </QueryClientProvider>
  );
}

export default App;
