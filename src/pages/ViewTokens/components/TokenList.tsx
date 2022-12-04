import { Token } from "lib/types";
import { useState } from "react";
import styled from "styled-components/macro";
import { TokenCard } from "./TokenCard";
import { TokenModal } from "./TokenModal";

const Root = styled.div`
  justify-content: center;
  display: flex;
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 24px;
  padding: 0 16px;
`;

interface Props {
  tokens: Token[];
}
export function TokenList({ tokens }: Props) {
  const [activeToken, setActiveToken] = useState<Token>();

  return (
    <Root>
      <Container>
        {tokens.length === 0 ? (
          <>Can't find any NFTs that belong to this account...</>
        ) : (
          tokens.map((token) => (
            <TokenCard onClick={() => setActiveToken(token)} key={token.id} token={token} />
          ))
        )}
      </Container>
      <TokenModal token={activeToken} onHide={() => setActiveToken(undefined)} />
    </Root>
  );
}
