const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const bookRouter = express.Router();

bookRouter.route('/books')
    .get((req, res) => {
      const response = { "hello": "This is my express api practice for books web service"}
      res.json(response);
});

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send("Welcome to express-practice.");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
