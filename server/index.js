const express = require('express');
const axios = require('axios');
const config = require('../config.js')
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/products', function (req, res) {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products?page=all&count=all', {
    headers: {
      Authorization: config.Authorization
    }
  })
    .then(results => {
      res.status(200).send(results.data);
    })
    .catch(results => {
      res.status(404)
    })
})

app.get('/products/:product_id', function (req, res) {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.product_id}`, {
    headers: {
      Authorization: config.Authorization
    }
  })
    .then(results => {
      res.status(200).send(results.data);
    })
    .catch(results => {
      res.status(404)
    })
})

app.get('/products/:product_id/styles', function (req, res) {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.product_id}/styles`, {
    headers: {
      Authorization: config.Authorization
    }
  })
    .then(results => {
      res.status(200).send(results.data);
    })
    .catch(results => {
      res.status(404)
    })
})

app.get('/products/:product_id/related')

app.get('/reviews/:id', (req, res) => {
  // console.log('server getting reviews')
  // console.log('req.body: ', req.body)
  // console.log('req.params: ', req.params)
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${req.params.id}`, {
    headers: {
      Authorization: config.Authorization,
    }
  })
    .then((results) => {
      res.status(200).send(results.data);
    })
})
app.get('/reviews/meta/:id', (req, res) => {
  // console.log('server getting reviews')
  // console.log('req.body: ', req.body)
  // console.log('req.params: ', req.params)
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${req.params.id}`, {
    headers: {
      Authorization: config.Authorization,
    }
  })
    .then((results) => {
      res.status(200).send(results.data);
    })
})

app.post('/reviews')

app.put('/reviews/:review_id/helpful')

app.put('/reviews/:review_id/report')

//use app.route with requests to the same path
app.get('/qa/questions', function (req, res) {
  // console.log('req.query', req.query);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${req.query.product_id}&count=${req.query.count}`, {
    headers: {
      Authorization: config.Authorization,
    }
  })
    .then(results => {
      res.status(200).send(results.data);
    })

});

app.get('/qa/questions/:question_id/answers')

app.post('/qa/questions')

app.post('/qa/questions/:questions_id/answers')

app.put('/qa/questions/:question_id/helpful')

app.put('/qa/questions/:question_id/report')

app.put('/qa/answers/:answer_id/helpful')

app.put('/qa/answers/:answer_id/report')

app.get('/cart')

app.post('/cart')

app.post('/interactions')



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});