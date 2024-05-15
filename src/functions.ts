import { readFile } from "./fetchData";
import {
  GetAddressProps,
  GetAddressForAssetsProps,
  Asset,
  GetAddressForAssetReturnType,
  GetAddressForAssetsReturnType,
  Data,
} from "./types";

export async function getAddressForAsset({
  chainId,
  asset,
}: GetAddressProps): Promise<GetAddressForAssetReturnType> {
  try {
    const data: any = await readFile();
    if (!data[chainId]) {
      throw Error("Invalid Chain ID");
    }

    const result = data[chainId].find(
      (obj: Asset) => obj.symbol.toLowerCase() == asset.toLowerCase()
    );

    if (result) {
      return { address: result.address };
    } else {
      throw Error("Asset not supported");
    }
  } catch (err: any) {
    throw Error(err);
  }
}

export async function getAddressForAssets({
  chainId,
  fromAsset,
  toAsset,
}: GetAddressForAssetsProps): Promise<GetAddressForAssetsReturnType> {
  try {
    const result: GetAddressForAssetsReturnType = {
      fromAddress: "",
      toAddress: "",
    };

    const data: any = await readFile();

    if (!data[chainId]) {
      throw Error("Invalid Chain ID");
    }

    const fromObj = data[chainId].find((obj: Asset) => obj.symbol == fromAsset);
    const toObj = data[chainId].find((obj: Asset) => obj.symbol == toAsset);

    if (fromObj) {
      result.fromAddress = fromObj.address;
    } else {
      throw Error("Asset not supported");
    }
    if (toObj) {
      result.toAddress = toObj.address;
    } else {
      throw Error("Asset not supported");
    }
    return result;
  } catch (err: any) {
    throw Error(err);
  }
}
