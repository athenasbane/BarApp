# Bar App Back End

## Introduction

The Bar App API is organised around REST. It returns JSON-encoded responses and uses standard HTTP response codes and authentication.

## Authentication

The Bar App API uses bearer auth. Use "Authorization": "Bearer USER_TOKEN" for authed routes.

### Order

**_Endpoint:_**

```
    GET /order
    requiresAuth: true
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
