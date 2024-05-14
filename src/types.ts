export type GetAddressProps = {
  chainId: string;
  asset: string;
};

export type GetAddressForAssetsProps = {
  chainId: string;
  fromAsset: string;
  toAsset: string;
};

export type Asset = {
  address: string;
  chainId: number;
  symbol: string;
  decimals: number;
  name: string;
  coinKey?: string;
  logoURI?: string;
  priceUSD: string;
};

export type Data = {
  [chainId: string]: Asset[];
};

export type GetAddressForAssetReturnType = {
  address: string;
};

export type GetAddressForAssetsReturnType = {
  fromAddress: string;
  toAddress: string;
};
