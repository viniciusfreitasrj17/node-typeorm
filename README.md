# Backend with Typescript and TypeORM on Docker Compose

### Create .env.development and .env.production by .env examples

## Run Production on Docker Compose

`docker-compose --file docker-compose-production.yaml --env-file .env.production up -d`
<br>

`docker-compose --file docker-compose-production.yaml --env-file .env.production down`

#### Run Production without Docker Compose

`yarn && yarn build && yarn start`

<br>
<br>
<br>

## Run Development on Docker Compose

`docker-compose -env-file .env.development up -d`
<br>

`docker-compose -env-file .env.development down`

#### Run Development without Docker Compose

`yarn && yarn dev`
