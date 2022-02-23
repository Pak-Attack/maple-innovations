import React from 'react';
import ProductDescription from './productDesc.jsx';
import StylesAndCart from './stylesAndCart.jsx';
import Gallery from './gallery.jsx';
import Expanded from './expanded.jsx';
import axios from 'axios';
// import { caretleft } from "phosphor-react";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {
        "id": 37314,
        "campus": "hr-rfe",
        "name": "Slacker's Slacks",
        "slogan": "Comfortable for everything, or nothing",
        "description": "I'll tell you how great they are after I nap for a bit.",
        "category": "Pants",
        "default_price": "65.00",
        "created_at": "2021-08-13T14:37:33.145Z",
        "updated_at": "2021-08-13T14:37:33.145Z",
        "features": [
          {
            "feature": "Fabric",
            "value": "99% Cotton 1% Elastic"
          },
          {
            "feature": "Cut",
            "value": "Loose"
          }
        ]
      },
      currentStyles: {
        "product_id": "37314",
        "results": [
          {
            "style_id": 221014,
            "name": "Black",
            "original_price": "65.00",
            "sale_price": null,
            "default?": true,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281104": {
                "quantity": 8,
                "size": "XS"
              },
              "1281105": {
                "quantity": 16,
                "size": "S"
              },
              "1281106": {
                "quantity": 17,
                "size": "M"
              },
              "1281107": {
                "quantity": 10,
                "size": "L"
              },
              "1281108": {
                "quantity": 15,
                "size": "XL"
              },
              "1281109": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221015,
            "name": "Olive Green",
            "original_price": "65.00",
            "sale_price": "55.00",
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
              }
            ],
            "skus": {
              "1281110": {
                "quantity": 8,
                "size": "XS"
              },
              "1281111": {
                "quantity": 16,
                "size": "S"
              },
              "1281112": {
                "quantity": 17,
                "size": "M"
              },
              "1281113": {
                "quantity": 10,
                "size": "L"
              },
              "1281114": {
                "quantity": 15,
                "size": "XL"
              },
              "1281115": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221016,
            "name": "Grey",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281116": {
                "quantity": 8,
                "size": "XS"
              },
              "1281117": {
                "quantity": 16,
                "size": "S"
              },
              "1281118": {
                "quantity": 17,
                "size": "M"
              },
              "1281119": {
                "quantity": 10,
                "size": "L"
              },
              "1281120": {
                "quantity": 15,
                "size": "XL"
              },
              "1281121": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221017,
            "name": "Tan",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281122": {
                "quantity": 8,
                "size": "XS"
              },
              "1281123": {
                "quantity": 16,
                "size": "S"
              },
              "1281124": {
                "quantity": 17,
                "size": "M"
              },
              "1281125": {
                "quantity": 10,
                "size": "L"
              },
              "1281126": {
                "quantity": 15,
                "size": "XL"
              },
              "1281127": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221018,
            "name": "Red",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1461551449292-b63f7419ac93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281128": {
                "quantity": 8,
                "size": "XS"
              },
              "1281129": {
                "quantity": 16,
                "size": "S"
              },
              "1281130": {
                "quantity": 17,
                "size": "M"
              },
              "1281131": {
                "quantity": 10,
                "size": "L"
              },
              "1281132": {
                "quantity": 15,
                "size": "XL"
              },
              "1281133": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221019,
            "name": "Pinstripe",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281134": {
                "quantity": 8,
                "size": "XS"
              },
              "1281135": {
                "quantity": 16,
                "size": "S"
              },
              "1281136": {
                "quantity": 0,
                "size": "M"
              },
              "1281137": {
                "quantity": 10,
                "size": "L"
              },
              "1281138": {
                "quantity": 15,
                "size": "XL"
              },
              "1281139": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221020,
            "name": "Khaki",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1560095633-6803ba0461cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281140": {
                "quantity": 8,
                "size": "XS"
              },
              "1281141": {
                "quantity": 16,
                "size": "S"
              },
              "1281142": {
                "quantity": 17,
                "size": "M"
              },
              "1281143": {
                "quantity": 10,
                "size": "L"
              },
              "1281144": {
                "quantity": 15,
                "size": "XL"
              },
              "1281145": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221021,
            "name": "Plaid",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1544701758-5241eb611a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281146": {
                "quantity": 8,
                "size": "XS"
              },
              "1281147": {
                "quantity": 16,
                "size": "S"
              },
              "1281148": {
                "quantity": 17,
                "size": "M"
              },
              "1281149": {
                "quantity": 10,
                "size": "L"
              },
              "1281150": {
                "quantity": 15,
                "size": "XL"
              },
              "1281151": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          },
          {
            "style_id": 221022,
            "name": "White",
            "original_price": "65.00",
            "sale_price": null,
            "default?": false,
            "photos": [
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
            ],
            "skus": {
              "1281152": {
                "quantity": 8,
                "size": "XS"
              },
              "1281153": {
                "quantity": 16,
                "size": "S"
              },
              "1281154": {
                "quantity": 17,
                "size": "M"
              },
              "1281155": {
                "quantity": 10,
                "size": "L"
              },
              "1281156": {
                "quantity": 15,
                "size": "XL"
              },
              "1281157": {
                "quantity": 6,
                "size": "XXL"
              }
            }
          }
        ]
      },
      //delete above
      currentStyleId: '',
      scrolledDownValue: false,
      currentMainImage: '',
      currentMainImageIndex: 0,
      expandedView: false,
      magnified: false,
      mainImageHeight: 0,
      mainImageWidth: 0,
      selectedSizeSKU: '',
      selectedQuantity: 0
    }
    this.carouselScrolledDown = this.carouselScrolledDown.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.handleLeftRightMainImage = this.handleLeftRightMainImage.bind(this);
    this.scrollOnMainImageChange = this.scrollOnMainImageChange.bind(this);
    this.handleExpandedViewClick = this.handleExpandedViewClick.bind(this);
    this.handleMagnifyingClick = this.handleMagnifyingClick.bind(this);
    this.handleMagnifyingMovement = this.handleMagnifyingMovement.bind(this);
    this.changeMagnifyingPosition = this.changeMagnifyingPosition.bind(this);
    this.handleStyleChangeClick = this.handleStyleChangeClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     currentStyleId: this.props.currentStyleId
  //   })
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.currentStyleId !== prevProps.currentStyleId) {
  //     this.setState({
  //       currentStyleId: this.props.currentStyleId,
  //       currentMainImage: this.props.currentStyles.results[0].photos[0].url,
  //       currentMainImageIndex: 0
  //     });
  //   }
  // }
  //******delete */
  // currentProduct={currentProduct}
  // currentStyles={currentStyles}
  // currentStyleId={currentStyles.results[0].style_id}
  //*****end delete */


  componentDidMount() {
    let currentProductID = this.props.currentProductID;
    axios.all([
      axios.get('/products/params', { params: { product_id: currentProductID } }),
      axios.get('/products/params/styles', { params: { product_id: currentProductID } })])
      .then(axios.spread((firstResponse, secondResponse) => {
        //correct data is reaching this point after click event
        this.setState({
          currentProduct: firstResponse.data,
          currentStyles: secondResponse.data,
          currentStyleId: secondResponse.data.results[0].style_id
        })
      }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentProductID !== prevProps.currentProductID) {
      let currentProductID = this.props.currentProductID;
      axios.all([
        axios.get('/products/params', { params: { product_id: currentProductID } }),
        axios.get('/products/params/styles', { params: { product_id: currentProductID } })])
        .then(axios.spread((firstResponse, secondResponse) => {
          //correct data is reaching this point after click event
          this.setState({
            currentProduct: firstResponse.data,
            currentStyles: secondResponse.data,
            currentStyleId: secondResponse.data.results[0].style_id,
            currentMainImageIndex: 0
          })
        }))
      };
    }



  carouselScrolledDown(distFromTop) {
    //element.scroll was not scrolling the exact amount. Unsure why so distfromtop > 5 is to compensate for the decimal remainders.
    if (distFromTop > 5) {
      this.setState({
        scrolledDownValue: true
      });
    } else {
      this.setState({
        scrolledDownValue: false
      });
    }
  }

  handleThumbnailClick(imageURL, index) {
    let scrolled = index !== 0
      ? true
      : false;

    this.setState({
      currentMainImage: imageURL,
      currentMainImageIndex: index,
      scrolledDownValue: scrolled
    })
    this.scrollOnMainImageChange(index)
  }

  handleExpandedViewClick() {
    if (!this.state.expandedView) {
      this.setState({
        expandedView: true
      })
    } else {
      this.setState({
        expandedView: false
      })
    }
  }

  handleLeftRightMainImage(direction, allThumbnails) {
    let newMainImage;
    let newIndex;
    let newScrollValue;
    if (direction === 'left') {
      if (this.state.currentMainImageIndex === 1) {
        newMainImage = allThumbnails[this.state.currentMainImageIndex - 1].url;
        newIndex = this.state.currentMainImageIndex - 1;
        newScrollValue = false;
      } else {
        newMainImage = allThumbnails[this.state.currentMainImageIndex - 1].url;
        newIndex = this.state.currentMainImageIndex - 1;
        newScrollValue = true;
      }
    } else {
      if (this.state.currentMainImageIndex < allThumbnails.length - 1) {
        newMainImage = allThumbnails[this.state.currentMainImageIndex + 1].url;
        newIndex = this.state.currentMainImageIndex + 1;
        newScrollValue = true;
      }
    }
    this.setState({
      currentMainImage: newMainImage,
      currentMainImageIndex: newIndex,
      scrolledDownValue: newScrollValue
    })
    this.scrollOnMainImageChange(newIndex)
  }

  scrollOnMainImageChange(newIndex) {
    let yChange;
    this.state.expandedView ? yChange = 30 : yChange = 62
    let targetThumbnail = document.querySelector('.thumbnail-main-carousel');
    let topSpacing;
    if (newIndex > 0) {
      topSpacing = newIndex * yChange;
    } else {
      topSpacing = 0;
    }
    if (targetThumbnail) {
      targetThumbnail.scroll({
        top: topSpacing,
        behavior: 'smooth'
      })
    }
  }

  handleMagnifyingClick(event) {
    const targetElement = event.currentTarget;
    const {
      width,
      height
    } = targetElement.getBoundingClientRect();
    if (this.state.magnified) {
      this.setState({
        magnified: false,
        mainImageWidth: width,
        mainImageHeight: height
      })
    } else {
      this.setState({
        magnified: true,
        mainImageWidth: width,
        mainImageHeight: height
      })
    }
  }

  handleMagnifyingMovement(event) {
    const targetElement = document.querySelector('.main-image');
    const {
      top,
      left,
      width,
      height
    } = targetElement.getBoundingClientRect();

    const y = event.clientY - top;
    const x = event.clientX - left;

    // Calculate relative position
    const imgX = (x / width) * 100;
    const imgY = (y / height) * 100;

    // console.log({y})
    // console.log({x})
    // console.log({width})
    // console.log({height})

    this.changeMagnifyingPosition(x, y, imgX, imgY);
  }

  changeMagnifyingPosition(x, y, imgX, imgY) {
    //use a ref instead of queryselector. image-magnifier should be an id
    const magnifyingGlassElement = document.querySelector('.image-magnifier');
    const {
      mainImageHeight,
      mainImageWidth,
      currentMainImage
    } = this.state;

    // let backGroundNewXPosition = `${-(xPos)}px`;
    // let backGroundNewYPosition = `${-(yPos)}px`;

    let bigImageHeight = mainImageHeight * 2.5;
    let bigImageWidth = mainImageWidth * 2.5;
    //changes position of the magnifying glass and its background image
    magnifyingGlassElement.style.backgroundSize = `auto ${bigImageWidth}px`;
    magnifyingGlassElement.style.top = `${y}px`;
    magnifyingGlassElement.style.left = `${x}px`;
    magnifyingGlassElement.style.pointerEvents = 'none';
    magnifyingGlassElement.style.backgroundPosition = `${imgX}% ${imgY}%`;
    magnifyingGlassElement.style.backgroundRepeat = 'no-repeat';
  }

  handleStyleChangeClick(productId, thumbnailLength) {
    if (this.state.currentMainImageIndex <= thumbnailLength - 1) {
      this.setState({
        currentStyleId: productId,
        selectedSizeSKU: '',
        selectedQuantity: 0
      })
    } else {
      this.setState({
        currentStyleId: productId,
        selectedSizeSKU: '',
        selectedQuantity: 0,
        currentMainImageIndex: 0,
        scrolledDownValue: false
      })
    }
  }

  handleSelect(event) {
    let targetStateElement = event.target.name;
    let newStateValue =
      targetStateElement === 'selectedQuantity'
        ? Number(event.target.value)
        : event.target.value;

    this.setState({
      [targetStateElement]: newStateValue
    })
  }

  handleAddToCart() {
    this.state.selectedSizeSKU && this.state.selectedQuantity
      ? console.log("added to cart")
      : console.log("pick a size and quantity")
  }

  render() {
    const {
      currentProduct,
      currentStyles,
      currentStyleId,
      scrolledDownValue,
      currentMainImage,
      currentMainImageIndex,
      expandedView,
      magnified,
      mainImageHeight,
      mainImageWidth,
      selectedSizeSKU,
      selectedQuantity
    } = this.state;

    let galleryView;
    if (!this.state.expandedView) {
      galleryView =
        <div className="gallery-container">
          <Gallery
            currentStyles={currentStyles}
            currentStyleId={currentStyleId}
            carouselScrolledDown={this.carouselScrolledDown}
            scrolledDownValue={scrolledDownValue}
            currentMainImage={currentMainImage}
            handleThumbnailClick={this.handleThumbnailClick}
            handleLeftRightMainImage={this.handleLeftRightMainImage}
            currentMainImageIndex={currentMainImageIndex}
            expandedView={expandedView}
            handleExpandedViewClick={this.handleExpandedViewClick}
          />
        </div>
    } else {
      galleryView =
        <div className="gallery-container-expanded">
          <Expanded
            currentStyles={currentStyles}
            currentStyleId={currentStyleId}
            carouselScrolledDown={this.carouselScrolledDown}
            scrolledDownValue={scrolledDownValue}
            currentMainImage={currentMainImage}
            handleThumbnailClick={this.handleThumbnailClick}
            handleLeftRightMainImage={this.handleLeftRightMainImage}
            currentMainImageIndex={currentMainImageIndex}
            expandedView={expandedView}
            handleExpandedViewClick={this.handleExpandedViewClick}
            magnified={magnified}
            handleMagnifyingClick={this.handleMagnifyingClick}
            handleMagnifyingMovement={this.handleMagnifyingMovement}
            mainImageHeight={mainImageHeight}
            mainImageWidth={mainImageWidth}
          />
        </div>
    }

    let styleView;
    if (!this.state.expandedView) {
      styleView =
        <div className="styles-container">
          <StylesAndCart
            currentProduct={currentProduct}
            currentProductRating={this.props.currentProductRating}
            currentStyles={currentStyles}
            handleStyleChangeClick={this.handleStyleChangeClick}
            currentStyleId={currentStyleId}
            handleSelect={this.handleSelect}
            selectedSizeSKU={selectedSizeSKU}
            selectedQuantity={selectedQuantity}
            currentMainImageIndex={currentMainImageIndex}
            handleAddToCart={this.handleAddToCart} />
        </div>

    } else {
      styleView = <div></div>
    }

    return (
      <div className="overview-main-container">
        <div className="pic-style-container">
          {galleryView}
          {styleView}
        </div>
        <div className="product-info-container">
          <ProductDescription
            currentProduct={currentProduct} currentProductRating={this.props.currentProductRating} currentStyles={currentStyles} />
        </div>
      </div>
    )
  }
}

export default Overview;
