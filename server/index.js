require('dotenv').config();
const express = require('express')
massive = require('massive')
bodyParser = require('body-parser')
ctrl = require('./controller.js')

const app = express()
app.use(bodyParser.json());

const PORT = 3333;
// console.log(process.env.DB_CONNECTION)
massive(process.env.DB_CONNECTION)
.then(db => {
app.set('db', db )
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
 })
//.catch(err => console.log(err))


// app.get('/api/__', ctrl.getPosts);
// app.put('/api/__/:id', ctrl.updatePost);
// app.post('/api/___', ctrl.addPost);
// app.delete('/api/product/:id', ctrl.deletePost);