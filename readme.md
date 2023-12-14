# Express, Sequelize, Node-cron

## Setup
```
$ npm i
$ cp .env.dist .env
SET DB_URL
```

## Run
```
$ npm run dev
```

## Endpoints
```
curl --location --request PATCH 'http://localhost:3000/users/1' \
--header 'Content-Type: application/json' \
--data '{
    "balance": -2
}'
```
