import fetch from "node-fetch";
import { Data } from "./types";

export async function readFile(): Promise<Data[]> {
  try {
    const response = await fetch(
      "https://klink-assets.s3.eu-central-1.amazonaws.com/klink-contract-lifi/lifi-data.json"
    );

    const data: any = await response.json();

    if (data) {
      return data;
    } else {
      throw Error("File not found");
    }
  } catch (err: any) {
    throw Error(err);
  }
}
