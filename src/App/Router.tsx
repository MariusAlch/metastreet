import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { ConnectWallet } from "pages/ConnectWallet/ConnectWallet";
import { ViewTokens } from "pages/ViewTokens/ViewTokens";

export function Router() {
  const { active } = useWeb3React<Web3Provider>();

  if (!active) return <ConnectWallet />;

  return <ViewTokens />;
}
