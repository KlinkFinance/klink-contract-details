import axios from "axios";
import { Data } from "./types";

export async function readFile(): Promise<Data[]> {
  try {
    const response = await axios.get(
      "https://assets.klink.finance/klink-contract-lifi/lifi-data.json"
    );

    const data: any = await response.data;

    if (data) {
      return data;
    } else {
      throw Error("File not found");
    }
  } catch (err: any) {
    throw Error(err);
  }
}
