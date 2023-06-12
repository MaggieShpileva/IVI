import type { NextApiRequest, NextApiResponse } from 'next';
import data from '@/data/persons.json';
import { IPerson, ResponseError } from '@/types/types';

export default function handler(req: NextApiRequest, res: NextApiResponse<IPerson | ResponseError>) {
  const { query } = req;
  const { id } = query;
  const persons = data?.persons as IPerson[];
  const person = persons.find((p) => String(p.id) == id);

  return person ? res.status(200).json(person) : res.status(404).json({ message: `Person with id: ${id} not found.` });
}
