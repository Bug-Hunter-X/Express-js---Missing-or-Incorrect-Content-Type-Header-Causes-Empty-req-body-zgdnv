const express = require('express');
const app = express();

app.use(express.json()); //This line is essential
app.use((req, res, next) => {
  if (req.method === 'POST' && req.is('application/*')) {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        req.body = JSON.parse(body);
      } catch (error) {
        return res.status(400).send('Invalid JSON');
      }
      next();
    });
  } else {
    next();
  }
});

app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});