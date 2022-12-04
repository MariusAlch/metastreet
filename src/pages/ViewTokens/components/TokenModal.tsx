import { Token } from "lib/types";
import { Modal } from "react-bootstrap";
import styled from "styled-components/macro";

const Image = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-top: 8px;
`;

const Value = styled.div`
  font-size: 16px;
`;

interface Props {
  onHide: () => void;
  token?: Token;
}

export function TokenModal({ onHide, token }: Props) {
  return (
    <Modal show={!!token} onHide={onHide}>
      {token && (
        <>
          <Modal.Header>
            <Modal.Title>
              {token.collectionName} #{token.id}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={token.image} />
            <Label>Contract</Label>
            <Value>{token.contract}</Value>
            <Label>Token ID</Label>
            <Value>{token.id}</Value>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
}
