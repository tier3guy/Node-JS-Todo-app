const express = require('express');
const dotenv = require('dotenv');
const path =  require('path');
const connectdb = require('./server/database/mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const { response } = require('express');

const app = express();


dotenv.config({path : 'config.env'});
var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine','ejs');

app.use('/CSS',express.static(path.resolve(__dirname,'assets/CSS')));
app.use('/JS',express.static(path.resolve(__dirname,'assets/JS')));

connectdb();
app.use('/',require('./server/routes/router'));


app.get('/' , (req,res) => {

  axios.get('http://localhost:3000/api/todos')
  .then(response => {
    res.render('index' , {
      todoing__data : response.data
    });
  })
  .catch(err => {
    res.send(err.message);
  })

})

app.listen(PORT, () => console.log(`Server is listening to the http://localhost:${PORT} ...`));