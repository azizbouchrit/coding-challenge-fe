# Lableby Front-End Coding Challenge

![osheaga](https://files-8ijdy0erg.vercel.app/Screen%20Shot%202020-09-06%20at%209.41.57%20PM.png)

As part of the suite of tooling we are building in lableby is a management app for delivery managers that they can use to track current deliveries.

Your challenge is to build a front-end app in React.js that will display the order list view. 

## Functional requirements

- Has a basic layout that will show the order list on the left and the order details on the right.
- When selecting an order the order details should show the order information as designed in the image.

## Non-functional requirements

- Challenge is submitted as pull request against this repo ([fork it](https://help.github.com/articles/fork-a-repo/) and [create a pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/).
- The microsite should be deployed to [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

### Bonus

* Localization: support for multiple languages (English, French, ...)
* Responsive design

### Remarks

* You can setup your microsite any way you like; we're partial to NodeJS, ExpressJS and React
* CSS can be written using SASS, LESS or similar higher-level language
* You can ignore the real time nature of the map, just displaying the mark of the driver is enough.
* The buttons can be just displayed.

### Things that are important to us

- Code quality, maintainability and readability
- Attention to the User Experience

### Things you'll not be evaluated on

- Features we didn't list in this README
- The quantity of code you write

# Documentation

## Supporting Data

The following is an example of order details response, you can use it to feed your components:

```
{
  "orders": [
    {
      "courier": null,
      "customer": {
        "name": "Karim L.",
        "fullAddress": "Tunis, Tunisia",
        "id": "ckerkubem04aq07087wy956x5",
        "latitude": 36.8386634,
        "longitude": 10.2392804,
        "phoneNumber": "11111111"
      },
      "id": "ckerkubcm04aj07088iq517b2",
      "orderItems": [
        {
          "id": "ckerkubdh04ak07084vr8oa7y",
          "name": "Sandwich Latino",
          "price": 8.5
        },
        {
          "id": "ckerkube904an0708hjzzz53a",
          "name": "Crispy Beef Chicken Onion Burger",
          "price": 9
        }
      ],
      "orderType": "DELIVERY",
      "reference": "882178960",
      "restaurant": {
        "fullAddress": "Avenue de Hédi Nouira, Ariana 2001",
        "id": "cjn94mdtq4qr50b68pppdf116",
        "latitude": 36.8614427,
        "logoImg": "https://files-bocui07th.vercel.app/download%20(1).png",
        "longitude": 10.1642221,
        "name": "Baguette & Baguette Ennaser"
      },
      "status": "NEW"
    },
    {
      "courier": {
        "id": "ckerkubem04aq07087wy956x5",
        "name": "Ahmed",
        "latitude": 36.8386636,
        "longitude": 10.2392804
      },
      "customer": {
        "name": "Samar B.",
        "fullAddress": "Tunis, Tunisia",
        "id": "ckerkubem04aq07087wy956x5",
        "latitude": 36.8386634,
        "longitude": 10.2392804,
        "phoneNumber": "11111111"
      },
      "id": "ckerkubcm04aj07088iq517b2",
      "orderItems": [
        {
          "id": "ckerkubdh04ak07084vr8oa7y",
          "name": "Sandwich Fermier",
          "price": 8.5
        }
      ],
      "orderType": "DELIVERY",
      "reference": "882178961",
      "restaurant": {
        "fullAddress": "Avenue de Hédi Nouira, Ariana 2001",
        "id": "cjn94mdtq4qr50b68pppdf116",
        "latitude": 36.8614427,
        "logoImg": "https://files-bocui07th.vercel.app/download%20(1).png",
        "longitude": 10.1642221,
        "name": "Baguette & Baguette Ennaser"
      },
      "status": "EN_ROUTE"
    },
    {
      "courier": {
        "id": "ckerkubem04aq07087wy956x5",
        "name": "Chakib",
        "latitude": 36.8386636,
        "longitude": 10.2392804
      },
      "customer": {
        "name": "Manel B.",
        "fullAddress": "Tunis, Tunisia",
        "id": "ckerkubem04aq07087wy956x5",
        "latitude": 36.8386634,
        "longitude": 10.2392804,
        "phoneNumber": "11111111"
      },
      "id": "ckerkubcm04aj07088iq517b2",
      "orderItems": [
        {
          "id": "ckerkubdh04ak07084vr8oa7y",
          "name": "Chicken Burger",
          "price": 12
        }
      ],
      "orderType": "DELIVERY",
      "reference": "882178961",
      "restaurant": {
        "fullAddress": "Avenue de Hédi Nouira, Ariana 2001",
        "id": "cjn94mdtq4qr50b68pppdf116",
        "latitude": 36.8614427,
        "logoImg": "https://files-bocui07th.vercel.app/download%20(1).png",
        "longitude": 10.1642221,
        "name": "Baguette & Baguette Ennaser"
      },
      "status": "DELIVERED"
    }
  ]
}
```

`status` can be the following: 
  - NEW
  - PREPARING
  - READY_FOR_PICKUP
  - PICKED_UP
  - EN_ROUTE
  - DELIVERED
  - CANCELLED

Good luck ;)

