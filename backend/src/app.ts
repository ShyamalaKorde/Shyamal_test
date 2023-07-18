import express from 'express'
import bodyParser from 'body-parser'
import router from './Route'


const app = express()
var bcrypt = require('bcrypt');
const port = 3001;
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => {
    console.log(`running port on ${port}`)
})

export default app
