const express = require('express')
const app = express()

const port = process.env.OPENSHIFT_NODEJS_PORT || 8080
const ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.get('/', (req, res) => res.send('Hallo World!'));
app.listen(port, () => console.log(`Example app listening at http://${ip}:${port}`));
