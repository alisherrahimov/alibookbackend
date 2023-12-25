FROM node:16-alpine3.17 as build

RUN apk update && apk add openssl

WORKDIR /usr/src/alibook

COPY package*.json ./
COPY prisma ./prisma/

RUN yarn install

COPY --chown=node:node . .

RUN yarn prisma:generate

COPY . .

RUN yarn build

CMD [ "node", "dist/main.js" ]