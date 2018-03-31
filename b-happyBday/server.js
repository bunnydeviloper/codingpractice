const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => res.send());

app.listen(13129, () => {
  console.log('Running on port 13129, spajax.garagescript.org');
});
