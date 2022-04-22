# shopping-list backend

## Getting started

- Clone this repository: `git clone https://github.com/dicksonmelo/shopping-list`
- Move into the project directory: `cd shopping-list`
- Install the dependencies: `yarn` or `npm i`
- Create a .env file with:
  - TYPEORM_CONNECTION
  - TYPEORM_HOST
  - TYPEORM_USERNAME
  - TYPEORM_PASSWORD
  - TYPEORM_DATABASE
  - TYPEORM_PORT
  - TYPEORM_MIGRATIONS
  - TYPEORM_MIGRATIONS_DIR
  - TYPEORM_ENTITIES
  - TYPEORM_ENTITIES_DIR

## Database

I'm are using docker in this project, but you're free to use your PostgreSQL locally installed.

## Routes

- GET /products
- POST /products
- PUT /products/id
- DELETE /products/id