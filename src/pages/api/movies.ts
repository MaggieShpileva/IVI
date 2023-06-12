import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/Search_films_v2.json";
import { signIn } from "next-auth/react";
import { getToken } from "next-auth/jwt";
const secret = process.env.NEXTAUTH_SECRET;

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200);
};
