import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// index.htmlを表示
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// 採用ページを表示
app.get('/recruit', (req, res) => {
  res.sendFile(join(__dirname, 'recruit.html'));
});

app.get('/recruit.html', (req, res) => {
  res.sendFile(join(__dirname, 'recruit.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});