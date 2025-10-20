import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const { Client } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const CONTENT_FILE = path.join(__dirname, '../public/content.json');

// Database client (will be initialized if DATABASE_URL is set)
let dbClient = null;

// Initialize database connection if DATABASE_URL is provided
async function initDB() {
  if (process.env.DATABASE_URL) {
    try {
      dbClient = new Client({
        connectionString: process.env.DATABASE_URL,
      });
      await dbClient.connect();
      console.log('✅ Connected to Neon database');
    } catch (error) {
      console.warn('⚠️ Database connection failed, falling back to file-based storage:', error.message);
      dbClient = null;
    }
  }
}

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Get content from database or file
app.get('/api/content', async (req, res) => {
  try {
    if (dbClient) {
      // Fetch from database
      const result = await dbClient.query('SELECT data FROM content ORDER BY id DESC LIMIT 1');
      if (result.rows.length > 0) {
        const content = result.rows[0].data;
        res.json(content);
        console.log('📂 Content loaded from database');
        return;
      }
    }
    
    // Fallback to file
    const data = await fs.readFile(CONTENT_FILE, 'utf-8');
    const content = JSON.parse(data);
    res.json(content);
    console.log('📄 Content loaded from file');
  } catch (error) {
    console.error('Error reading content:', error);
    res.status(500).json({ error: 'Failed to read content' });
  }
});

// Update content in database and/or file
app.post('/api/content', async (req, res) => {
  try {
    const content = req.body;
    content.lastUpdated = new Date().toISOString();
    
    if (dbClient) {
      // Update database
      await dbClient.query(
        'UPDATE content SET data = $1, updated_at = NOW() WHERE id = (SELECT MAX(id) FROM content)',
        [JSON.stringify(content)]
      );
      console.log('✅ Content updated in database');
    }
    
    // Also update file as backup
    await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2));
    console.log('✅ Content updated in file');
    
    res.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    console.error('Error writing content:', error);
    res.status(500).json({ error: 'Failed to update content' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    database: dbClient ? 'connected' : 'disconnected'
  });
});

// Initialize database and start server
initDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Content API server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📊 Database: ${dbClient ? 'Neon (PostgreSQL)' : 'File-based'}`);
  });
}).catch(error => {
  console.error('Failed to initialize server:', error);
  process.exit(1);
});
