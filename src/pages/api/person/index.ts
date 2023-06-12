import type { NextApiRequest, NextApiResponse } from 'next';
import data from '@/data/persons.json';
import { IPerson } from '@/types/types';

export default function handler(req: NextApiRequest, res: NextApiResponse<IPerson[]>) {
  const persons = data?.persons as IPerson[];
  res.status(200).json(persons);
}
