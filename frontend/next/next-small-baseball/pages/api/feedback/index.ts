// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

export function extractFeedback(filePath: string) {
  const fileData: any = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

const createFeedback = (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.body.email;
  const feedbackText = req.body.text;

  const newFeedback = {
    id: new Date().toISOString(),
    email: email,
    text: feedbackText,
  };

  // store that in a database or in a file
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  data.push(newFeedback);
  fs.writeFileSync(filePath, JSON.stringify(data));
  res.status(201).json({ message: 'Success!', feedback: newFeedback });
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    createFeedback(req, res);
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ data });
  }
}
