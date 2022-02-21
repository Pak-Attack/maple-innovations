const express = require('express');
const axios = require('axios');
const config = require('../config.js')
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/products')

app.get('/products/:product_id')

app.get('/products/:product_id/styles')

app.get('/products/:product_id/related')

app.get('/reviews/')

app.get('/reviews/meta')

app.post('/reviews')

app.put('/reviews/:review_id/helpful')

app.put('/reviews/:review_id/report')

//use app.route with requests to the same path
app.get('/qa/questions', function(req, res) {
  // console.log('req.query', req.query);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${req.query.product_id}&page=${req.query.page}&count=${req.query.count}`, {
    headers: {
      Authorization: config.Authorization,
    }
  })
  .then(questions => {
    res.status(200).send(questions.data);
  })

});

app.get('/qa/questions/:question_id/answers', function(req, res) {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${req.params.question_id}/answers?page=${req.query.page}&count=${req.query.count}`, {
    headers: {
      Authorization: config.Authorization,
    }
  })
  .then(answers => {
    console.log('MASSIVE SUCCESS!!!')
    res.status(200).send(answers.data);
  })

});

app.post('/qa/questions')

app.post('/qa/questions/:questions_id/answers')

app.put('/qa/questions/:question_id/helpful')

app.put('/qa/questions/:question_id/report')

app.put('/qa/answers/:answer_id/helpful')

app.put('/qa/answers/:answer_id/report')

app.get('/cart')

app.post('/cart')

app.post('/interactions')



app.listen(PORT, ()=> {
  console.log(`App listening on port ${PORT}`)
});