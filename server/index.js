import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const CONTENT_FILE = path.join(__dirname, '../public/content.json');

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Get content
app.get('/api/content', async (req, res) => {
  try {
    const data = await fs.readFile(CONTENT_FILE, 'utf-8');
    const content = JSON.parse(data);
    res.json(content);
  } catch (error) {
    console.error('Error reading content:', error);
    res.status(500).json({ error: 'Failed to read content' });
  }
});

// Update content
app.post('/api/content', async (req, res) => {
  try {
    const content = req.body;
    content.lastUpdated = new Date().toISOString();
    
    await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2));
    console.log('✅ Content updated successfully');
    
    res.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    console.error('Error writing content:', error);
    res.status(500).json({ error: 'Failed to update content' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Content API server running on http://localhost:${PORT}`);
});
