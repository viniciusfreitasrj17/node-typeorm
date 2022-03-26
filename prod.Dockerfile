FROM node:alpine

WORKDIR /api

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

CMD sh -c 'sleep 7; yarn start'
