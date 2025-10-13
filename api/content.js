import fs from 'fs';
import path from 'path';

const CONTENT_FILE = path.join(process.cwd(), 'public/content.json');

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET - Read content
  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(CONTENT_FILE, 'utf-8');
      const content = JSON.parse(data);
      return res.status(200).json(content);
    } catch (error) {
      console.error('Error reading content:', error);
      return res.status(500).json({ error: 'Failed to read content' });
    }
  }

  // POST - Update content
  if (req.method === 'POST') {
    try {
      const content = req.body;
      content.lastUpdated = new Date().toISOString();
      
      fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2));
      
      return res.status(200).json({ 
        success: true, 
        message: 'Content updated successfully' 
      });
    } catch (error) {
      console.error('Error writing content:', error);
      return res.status(500).json({ error: 'Failed to update content' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
