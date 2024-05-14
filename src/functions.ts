import { data } from "./data";
import {
  GetAddressProps,
  GetAddressForAssetsProps,
  Asset,
  GetAddressForAssetReturnType,
  GetAddressForAssetsReturnType,
} from "./types";

export function getAddressForAsset({
  chainId,
  asset,
}: GetAddressProps): GetAddressForAssetReturnType {
  const result = data[chainId].find((obj: Asset) => obj.symbol == asset);
  if (result) {
    return { address: result.address };
  } else {
    return { address: "" };
  }
}

export function getAddressForAssets({
  chainId,
  fromAsset,
  toAsset,
}: GetAddressForAssetsProps): GetAddressForAssetsReturnType {
  const result: GetAddressForAssetsReturnType = {
    fromAddress: "",
    toAddress: "",
  };

  const fromObj = data[chainId].find((obj: Asset) => obj.symbol == fromAsset);
  const toObj = data[chainId].find((obj: Asset) => obj.symbol == toAsset);

  if (fromObj) result.fromAddress = fromObj.address;
  if (toObj) result.toAddress = toObj.address;
  return result;
}
