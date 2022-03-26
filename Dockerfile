FROM node:alpine

WORKDIR /api

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]
