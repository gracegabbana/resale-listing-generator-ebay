export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Use POST' });
    return;
  }

  // For now this is just a ping so we know the backend route works.
  // Your front-end calling /api/generate will now get a 200 response.
  res.status(200).json({ ok: true, message: 'API is alive' });
}
