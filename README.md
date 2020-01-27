# node-api

Basic NodeJS API.

## Development setup

`npm install`: installs project dependencies

`npm run lint`: runs linting rules

`npm test`: runs tests

`npm run start`: runs server locally

## Running the API in a Docker container

`docker build . -api`

`docker run -p -d 8001:80 api`

The API will be accessible at http://localhost:8001

To stop the container:
`docker stop api`
