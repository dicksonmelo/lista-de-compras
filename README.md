# shopping-list backend

## Getting started

- Clone this repository: `git clone https://github.com/dicksonmelo/shopping-list`
- Move into the project directory: `cd shopping-list`
- Install the dependencies: `yarn` or `npm i`
- Create a .env file with:
  - TYPEORM_CONNECTION=postgres
  - TYPEORM_HOST=localhost
  - TYPEORM_USERNAME=postgres
  - TYPEORM_PASSWORD=1p@st
  - TYPEORM_DATABASE=shopping-list
  - TYPEORM_PORT=5433
  - TYPEORM_MIGRATIONS=src/database/migrations/*.ts
  - TYPEORM_MIGRATIONS_DIR=src/database/migrations
  - TYPEORM_ENTITIES=src/entities/*.ts
  - TYPEORM_ENTITIES_DIR=src/entities

## Database

I'm are using docker in this project, but you're free to use your PostgreSQL locally installed.

## Routes

- GET /products
- POST /products
- PUT /products/id
- DELETE /products/id