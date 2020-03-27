const  express = require('express');
const routes = require('./routes');
const cors =require('cors'); //5.2 (gzipedd: 2.1k)


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
