import { Token } from "lib/types";
import styled from "styled-components/macro";

const Root = styled.button`
  all: unset;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;
  border-radius: 8px;

  :hover {
    transform: scale(1.03);
  }
`;

const Image = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
`;

interface Props {
  token: Token;
  onClick: () => void;
}
export function TokenCard({ token, onClick }: Props) {
  return (
    <Root onClick={onClick}>
      <Image src={token.image} />
    </Root>
  );
}
