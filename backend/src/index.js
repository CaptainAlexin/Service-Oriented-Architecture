const express = require('express');
const morgan = require ('morgan');
const multer = require ('multer');
const app = express();
const cors = require ('cors');
const path = require ('path');
const mongoose = require ('mongoose');
require('./database')


app.use(cors({origin: 'http://localhost:8100'}));
app.use(express.json());

app.use(morgan('dev'));
app.use('/api',require('./routes/index'));
app.use('/api/notas',require('./routes/nota.route'));
app.use('/api/recuerdos',require('./routes/recuerdo.route'))

app.listen(3000); 
console.log('Server on port',3000);