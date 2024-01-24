import { BannerType } from "@/types/types";
import type { NextApiRequest, NextApiResponse } from "next";
import bannerData from "../../../data/new_data/Main_banner.json";

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse<BannerType[]>
) {
  res.status(200).json(bannerData);
}
