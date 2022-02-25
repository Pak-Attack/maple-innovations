const express = require("express");
const axios = require("axios");
const config = require("../config.js");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.get("/products", function (req, res) {
  axios
    .get(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products?page=all&count=all",
      {
        headers: {
          Authorization: config.Authorization,
        },
      }
    )
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((results) => {
      res.status(404);
    });
});

app.get("/products/:product_id", function (req, res) {
  axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.product_id}`,
      {
        headers: {
          Authorization: config.Authorization,
        },
      }
    )
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((results) => {
      res.status(404);
    });
});

app.get("/products/:product_id/styles", function (req, res) {
  axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.product_id}/styles`,
      {
        headers: {
          Authorization: config.Authorization,
        },
      }
    )
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((results) => {
      res.status(404);
    });
});

app.get("/products/:product_id/related");

app.get("/reviews/:id", (req, res) => {
  axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${req.params.id}&count=500&sort=${req.query.sort}`,
      {
        headers: {
          Authorization: config.Authorization,
        },
      }
    )
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

app.get("/reviews/meta/:id", (req, res) => {
  axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${req.params.id}`,
      {
        headers: {
          Authorization: config.Authorization,
        },
      }
    )
    .then((results) => {
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

app.post("/reviews", (req, res) => {
  let request = req.body;
  request.recommend === "true"
    ? (request.recommend = true)
    : (request.recommend = false);
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`,
    headers: {
      Authorization: config.Authorization,
    },
  };
  return axios
    .post(options.url, request, options)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

app.put("/reviews/:review_id/helpful", (req, res) => {
  return axios({
    method: "PUT",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${req.params.review_id}/helpful`,
    headers: {
      Authorization: config.Authorization,
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

app.put("/reviews/:review_id/report", (req, res) => {
  return axios({
    method: "PUT",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${req.params.review_id}/report`,
    headers: {
      Authorization: config.Authorization,
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

//use app.route with requests to the same path
app.get("/qa/questions", function (req, res) {
  // console.log('req.query', req.query);
  axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${req.query.product_id}&page=${req.query.page}&count=${req.query.count}`,
      {
        headers: {
          Authorization: config.Authorization,
        },
      }
    )
    .then((questions) => {
      res.status(200).send(questions.data);
    });
});

app.post("/qa/questions");

app.post("/qa/questions/:questions_id/answers");

app.put("/qa/questions/:question_id/helpful");

app.put("/qa/questions/:question_id/report");

app.put("/qa/answers/:answer_id/helpful");

app.put("/qa/answers/:answer_id/report");

app.get("/cart");

app.post("/cart");

app.post("/interactions");

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
