import { useQuery } from "@tanstack/react-query";
import { Token as DomainToken } from "lib/types";
import axios from "axios";
import imageNotFound from "../assets/image-not-found.png";

function getTokens(address: string) {
  return axios.get(`https://api.reservoir.tools/users/${address}/tokens/v5`).then((res) =>
    res.data.tokens.map(
      (token: any): DomainToken => ({
        image: token.token.image ?? imageNotFound,
        contract: token.token.contract,
        id: token.token.tokenId,
        collectionName: token.token.collection.name,
      })
    )
  );
}

export function useTokensQuery(address: string) {
  return useQuery({
    queryKey: ["tokens", address],
    queryFn: () => getTokens(address),
  });
}
