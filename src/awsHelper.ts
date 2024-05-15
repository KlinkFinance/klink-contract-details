import AWS from "aws-sdk";
import { Data } from "./types";

export async function readFile(): Promise<Data[]> {
  try {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    const s3 = new AWS.S3();
    const params: AWS.S3.GetObjectRequest = {
      Bucket: process.env.AWS_BUCKET!,
      Key: `klink-contract-lifi/lifi-data.json`,
    };

    const response = await s3.getObject(params).promise();

    if (response.Body) {
      return JSON.parse(response.Body?.toString());
    } else {
      throw Error("File not found");
    }
  } catch (err: any) {
    throw Error(err);
  }
}
