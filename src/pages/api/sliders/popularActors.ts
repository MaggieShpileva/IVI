import { PersonForSliderType } from "@/types/types";
import type { NextApiRequest, NextApiResponse } from "next";
import popularActors from "../../../data/new_data/popularActors.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PersonForSliderType[]>
) {
  res.status(200).json(popularActors);
}
