import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from '../../../lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client = await connectDatabase();

  if (req.method === 'POST') {
    await insertDocument(client, 'todos', req.body);
    res.status(201).json({ message: 'Added success.' });
  }

  if (req.method === 'GET') {
    const documents = await getAllDocuments(client, 'todos', { _id: -1 });
    res.status(200).json({ data: documents });
  }

  client.close();
}

export default handler;
