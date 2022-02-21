const express = require('express');
const cors = require('cors');
const app = express();

const connection = require('../config/connect');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
   origin: '*',
   allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-With', 'Accept', 'Origin']
}));

connection.then(() => {
   app.listen(PORT, () => {
      console.log(`Servidor Rodando na porta: ${PORT}`);
   });
}).catch((err) => {
   console.log(err);
})