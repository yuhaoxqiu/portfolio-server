import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// API routes
app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', message: 'Portfolio server is running' });
});

// Serve static files from the Vite build in production
const distPath = path.join(__dirname, '../../dist/client');
app.use(express.static(distPath));

// Fallback to index.html for SPA routing
app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
