require('dotenv').config()
const express = require('express')
const { MongoClient } = require('mongodb')

const app = express()
const port = process.env.PORT // Set PORT
const db_name = process.env.DB_NAME // Set Database name

const uri = process.env.MONGODB_URI  // Set MongoDB URI
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const client = new MongoClient(uri)

async function connectToDatabase() {
  if (!client.isConnected) await client.connect()
  const db = client.db(db_name)
  return { db, client }
}

// GTA SAN ANDREAS API
app.get('/api/gta-sa', async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const collection = db.collection('gta-sa')
    const cheats = await collection.find({}).toArray()
    res.json({ success: true, data: cheats })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
})

// GTA III API
app.get('/api/gta-3', async (req, res) => {
    try {
      const { db } = await connectToDatabase()
      const collection = db.collection('gta-3')
      const cheats = await collection.find({}).toArray()
      res.json({ success: true, data: cheats })
    } catch (error) {
      res.json({ success: false, error: error.message })
    }
  })

// GTA IV API
app.get('/api/gta-3', async (req, res) => {
    try {
      const { db } = await connectToDatabase()
      const collection = db.collection('gta-4')
      const cheats = await collection.find({}).toArray()
      res.json({ success: true, data: cheats })
    } catch (error) {
      res.json({ success: false, error: error.message })
    }
  })

// GTA V API
app.get('/api/gta-3', async (req, res) => {
    try {
      const { db } = await connectToDatabase()
      const collection = db.collection('gta-5')
      const cheats = await collection.find({}).toArray()
      res.json({ success: true, data: cheats })
    } catch (error) {
      res.json({ success: false, error: error.message })
    }
  })

// GTA Vice City API
app.get('/api/gta-3', async (req, res) => {
    try {
      const { db } = await connectToDatabase()
      const collection = db.collection('gta-vc')
      const cheats = await collection.find({}).toArray()
      res.json({ success: true, data: cheats })
    } catch (error) {
      res.json({ success: false, error: error.message })
    }
  })

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
