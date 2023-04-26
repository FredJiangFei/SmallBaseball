import { buildFeedbackPath, extractFeedback } from '.';

function handler(req, res) {
  const id = req.query.id;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  const feedback = feedbackData.find((i) => i.id === id);
  res.status(200).json({ data: feedback });
}

export default handler;
