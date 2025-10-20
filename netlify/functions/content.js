import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

let connected = false;

// Connect to database once
async function ensureConnection() {
  if (!connected && process.env.DATABASE_URL) {
    try {
      await client.connect();
      connected = true;
      console.log('✅ Database connected');
    } catch (error) {
      console.error('Database connection failed:', error);
      connected = false;
    }
  }
}

export default async (req, context) => {
  // Enable CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders, status: 204 });
  }

  try {
    await ensureConnection();

    if (req.method === 'GET') {
      // Get content
      if (!connected) {
        return new Response(
          JSON.stringify({ error: 'Database not available' }),
          { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const result = await client.query('SELECT data FROM content ORDER BY id DESC LIMIT 1');
      const content = result.rows.length > 0 ? result.rows[0].data : null;

      if (!content) {
        return new Response(
          JSON.stringify({ error: 'No content found' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(JSON.stringify(content), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });
    }

    if (req.method === 'POST') {
      // Update content
      if (!connected) {
        return new Response(
          JSON.stringify({ error: 'Database not available' }),
          { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const content = await req.json();
      content.lastUpdated = new Date().toISOString();

      await client.query(
        'UPDATE content SET data = $1, updated_at = NOW() WHERE id = (SELECT MAX(id) FROM content)',
        [JSON.stringify(content)]
      );

      return new Response(
        JSON.stringify({ success: true, message: 'Content updated successfully' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
};
