import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { injectedConnector } from "lib/injectedConnector";
import styled from "styled-components/macro";
import useMount from "react-use/lib/useMount";

import metamaskLogo from "./metamask-icon.webp";

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MetamaskLogo = styled.img`
  object-fit: center;
  height: 200px;
  width: 200px;
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  :hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1.03);
  }
`;

const ConnectButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export function ConnectWallet() {
  const { activate } = useWeb3React<Web3Provider>();

  useMount(() => {
    if (!localStorage.getItem("metamask")) return;
    activate(injectedConnector);
  });

  function connect() {
    activate(injectedConnector);
    localStorage.setItem("metamask", "true");
  }

  return (
    <Root>
      <ConnectButton onClick={connect}>
        <MetamaskLogo src={metamaskLogo} />
      </ConnectButton>
    </Root>
  );
}
