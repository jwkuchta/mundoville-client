const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.listen(port, () => console.log(`listening on port ${port}`));