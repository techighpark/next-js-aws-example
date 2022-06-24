// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { uploadToS3 } from "../../libs/utils/aws";

interface ResponseType {
  ok: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log("req.body : ", req.body);

  res.status(200).json({ ok: false });
}
