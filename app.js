const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://fwlrGrandPrix:pra3XALmupChWaaJ@cluster0.1ok79.mongodb.net/fwlrgrandprix?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true })

client.connect(err => {
  console.log('Connected to database')
  if (err) {
    console.error(err)
  }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/database/:search', async (req, res) => {
  const search = req.params.search.replace(':', '')
  const database = client.db('fwlrgrandprix')
  const myCollection = database.collection('racecodes')

  if (search !== 'undefined') {
    try {
      const document = await myCollection.findOne({ code: search })
      const secretAnswer = document ? document.secret : null
      res.send(secretAnswer)
    } catch (err) {
      console.error(err.stack)
    }
  }
})

app.listen(port, () => {
  console.log(`FWLR app listening at port ${port}`)
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
}
