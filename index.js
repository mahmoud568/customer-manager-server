const express = require('express');
const app = express();


app.get('/', (req, res) => res.json({
    status: "error",
  }))

app.listen(process.env.PORT || 3000)