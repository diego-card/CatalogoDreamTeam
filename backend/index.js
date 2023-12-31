import dotenv from 'dotenv'
dotenv.config()

import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import cors from 'cors'
import express, { response } from 'express'
const app = express()


const tursoAuthToken = process.env.TURSO_TOKEN
const tursoUrl = process.env.TURSO_URL
import helmet from 'helmet'
import { createClient } from "@libsql/client";

const client = createClient({
    url: `${tursoUrl}`,
    authToken: `${tursoAuthToken}`
});

app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));
// app.use(
//   helmet({
//     contentSecurityPolicy: false
//   })
// )
// Displaying the dist folder as static is not working correctly

// app.use(express.static('dist'));

app.get('/cards/jogadores', async (req, res) => {
  const cards = await client.execute("select * from jogadores")
  // console.log(cards)
  res.json(cards.rows)
})

app.get('/cards/goleiros', async (req, res) => {
  const cards = await client.execute("select * from goleiros")
  // console.log(cards)
  res.json(cards.rows)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})