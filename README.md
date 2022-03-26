## Create .env.dev and .env.production by .env.example

## Run Production

`docker-compose --file docker-compose-production.yaml --env-file .env.production up -d`
`docker-compose --env-file .env.production down`

## Run Development

`docker-compose --env-file .env.dev up -d`
`docker-compose --env-file .env.dev down`

