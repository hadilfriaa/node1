const app = require('./src/services/express.service');
const mongoose = require('./src/services/mongoose.service');
mongoose.connectDb();
app.start();



//const express = require('express');
//const app = express();

//const port = 3000;

//const users = require('./src/mockup/users.json');

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//});

//app.get('/users',(req,res)=>{
//    res.status(200).json(users);
//});

//app.listen(port, () => {
//  console.log(`app is running on port${port}`);
//});

// dossier mockup -> users.json
//email,firstName, lastName
//users accessible en get


