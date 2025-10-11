import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// 静的ファイル配信
app.use(express.static(__dirname));

// ルートパスでindex.htmlを返す
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

// ヘルスチェック用（Renderが使う）
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});