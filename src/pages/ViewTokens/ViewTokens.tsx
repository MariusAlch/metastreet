import { Navbar, Container, NavDropdown } from "react-bootstrap";
import styled from "styled-components/macro";
import { TokenList } from "./components/TokenList";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useTokensQuery } from "./hooks/useTokensQuery";
import { getQueryParams } from "lib/getQueryParams";
import { truncate } from "lib/truncate";

const Root = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 200px;
`;

const StyledNavbar = styled(Navbar)`
  margin-bottom: 8px;
`;

export function ViewTokens() {
  const { deactivate, account } = useWeb3React<Web3Provider>();

  const tokensQuery = useTokensQuery(getQueryParams().address ?? account);

  function disconnect() {
    deactivate();
    localStorage.removeItem("metamask");
  }

  return (
    <Root>
      <StyledNavbar>
        <Container>
          <Navbar.Brand>MetaStreet</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown align="end" title={truncate(account ?? "")} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={disconnect}>Disconnect</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
      {tokensQuery.data ? <TokenList tokens={tokensQuery.data} /> : <>Loading...</>}
    </Root>
  );
}
