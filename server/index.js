const express = require('express');
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

app.get('/qa/questions')

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



app.listen(PORT, ()=> {
  console.log(`App listening on port ${PORT}`)
});