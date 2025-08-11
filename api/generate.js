export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Use POST' });
    return;
  }

  try {
    const { title, description } = req.body;

    if (!title || !description) {
      res.status(400).json({ error: 'Missing title or description' });
      return;
    }

    // Example: call your AI or eBay API here
    // Replace this with actual logic
    const generatedData = {
      seoTitle: `${title} | Optimized eBay Listing`,
      seoDescription: `${description} — Generated with AI for maximum visibility.`,
      priceSuggestion: '$39.99'
    };

    res.status(200).json({ success: true, data: generatedData });
  } catch (error) {
    console.error('Error generating listing:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
}
