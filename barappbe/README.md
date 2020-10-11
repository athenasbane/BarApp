# Bar App Back End ![version](https://img.shields.io/badge/version-0.6.1-yellow.svg)

## Introduction

The Bar App API is organised around REST. It returns JSON-encoded responses and uses standard HTTP response codes and authentication.

## Authentication

The Bar App API uses bearer auth. Use "Authorization": "Bearer USER_TOKEN" for authed routes.

### Order EndPoints:

Here are all the endpoints relating to customer orders,

**_Endpoint:_**

```
    GET /order
    requiresAuth: false // will be an authed endpoint in later versions once login functionality has been added to serverfe
```

**_Response:_**

```
    [
        {
            "delivered": true,
            "_id": "5f78828e55a69a7c4a94af8c",
            "orderedItems": [
                {
                    "title": "Pizza",
                    "optionId": "5f6a14bc83e9c17e8c6c31d0",
                    "subOption": "Small - Plain",
                    "volume": 1,
                    "price": 8
                },
                {
                    "title": "Pizza",
                    "optionId": "5f6a14cf83e9c17e8c6c31d1",
                    "subOption": "Medium - ",
                    "volume": 1,
                    "price": 10
                }
            ],
            "tableNumber": 6,
            "totalPrice": 18,
            "createdAt": "2020-10-03T13:54:22.422Z",
            "updatedAt": "2020-10-06T16:12:33.725Z",
            "__v": 0
        },
        {
            "delivered": true,
            "_id": "5f78831555a69a7c4a94af8d",
            "orderedItems": [
                {
                    "title": "Strongbow",
                    "optionId": "5f6a3d7bf2723782c641bb35",
                    "subOption": "Half-Pint",
                    "volume": 2,
                    "price": 2
                },
                {
                    "title": "Pizza",
                    "optionId": "5f6a14bc83e9c17e8c6c31d0",
                    "subOption": "Small - Pepperoni",
                    "volume": 1,
                    "price": 8
                }
            ],
            "tableNumber": 7,
            "totalPrice": 12,
            "createdAt": "2020-10-03T13:56:37.434Z",
            "updatedAt": "2020-10-06T16:09:53.683Z",
            "__v": 0
        },
    ]
```

**_Endpoint:_**

```
    POST /order
    requiresAuth: false
```

**_Request:_**

```
{
    OrderData: [ // Required
        {
            title: // Product Title to be shown on order. Required
            optionId: // Option ObjectID. Required.
            subOption: // Option Title. Required.
            volume: // number of this item. Required.
            price: // price of option. Optional
        }
     ],
    tableNumber: // Required.
}
```

**_Response:_**

```
{
    "delivered": false,
    "_id": "5f78831555a69a7c4a94af8d",
    "orderedItems": [
        {
            "title": "Strongbow",
            "optionId": "5f6a3d7bf2723782c641bb35",
            "subOption": "Half-Pint",
            "volume": 2,
            "price": 2
        },
        {
            "title": "Pizza",
            "optionId": "5f6a14bc83e9c17e8c6c31d0",
            "subOption": "Small - Pepperoni",
            "volume": 1,
            "price": 8
        }
    ],
    "tableNumber": 7,
    "totalPrice": 12, // Calculated by backend to avoid it being manipulated at the frontend.
    "createdAt": "2020-10-03T13:56:37.434Z",
    "updatedAt": "2020-10-06T16:09:53.683Z",
    "__v": 0
}
```

**_Endpoint:_**

```
    PATCH /order/:id
    requiresAuth: false // will be an authed endpoint in later versions once login functionality has been added to serverfe
```

This route simply updates the order from **"Delivered": false** to **"Delivered": true**.

### Menu Endpoints:

Below are all the endpoints in relation to products/menu items.

**_Endpoint:_**

```
    GET /menu
    requiresAuth: false
```

**_Example Response:_**

```
    [
        {
            "active": true,
            "_id": "5f688bc0d4bae6122fe47720",
            "title": "Strongbow",
            "category": "drink",
            "subCategory": "cider",
            "createdAt": "2020-09-21T11:17:20.331Z",
            "updatedAt": "2020-10-01T14:44:53.861Z",
            "__v": 0
        },
        {
            "active": true,
            "_id": "5f7cb064ae22652ab9dd2dc1",
            "title": "House Red Wine",
            "category": "drink",
            "subCategory": "wine",
            "createdAt": "2020-10-06T17:59:00.069Z",
            "updatedAt": "2020-10-06T17:59:00.069Z",
            "__v": 0
        },
        {
            "active": true,
            "_id": "5f7cc164d3b2922fc594052a",
            "title": "White Wine House",
            "category": "drink",
            "subCategory": "wine",
            "createdAt": "2020-10-06T19:11:32.520Z",
            "updatedAt": "2020-10-06T19:11:32.520Z",
            "__v": 0
        },
    ...
    ]
```

**_Endpoint:_**

```
    GET /menu/:id
    requiresAuth: false
```

This endpoint returns an individual product when ':id' param is replaced with a valid product \_id value.

```
    GET /menu/:id/option
    requiresAuth: false
```

This returns all options saved to a given product when ':id' param is replaced with a valid product \_id value.

**_Example Response:_**

```
    [
        {
            "type": "increment",
            "minVol": 0,
            "optionActive": true,
            "selector": [],
            "_id": "5f6a3d7bf2723782c641bb35",
            "optionTitle": "Half-Pint",
            "price": 2,
            "product": "5f688bc0d4bae6122fe47720",
            "__v": 0
        },
        {
            "type": "increment",
            "minVol": 0,
            "optionActive": true,
            "selector": [],
            "_id": "5f6a3d84f2723782c641bb36",
            "optionTitle": "Pint",
            "price": 4,
            "product": "5f688bc0d4bae6122fe47720",
            "__v": 0
        }
]
```

```
    POST /menu
    requiresAuth: true
```

For adding a new product to the menu.

**_Request:_**
