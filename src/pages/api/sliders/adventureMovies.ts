import { PosterKinopoiskType } from "@/types/types";
import type { NextApiRequest, NextApiResponse } from "next";
import adventure_time from "../../../data/new_data/adventure_time.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PosterKinopoiskType[]>
) {
  res.status(200).json(adventure_time);
}
