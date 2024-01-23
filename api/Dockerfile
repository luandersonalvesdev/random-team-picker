FROM node:16.19.1-alpine3.17

WORKDIR /api

EXPOSE 3000

COPY ./package*.json ./

RUN npm install

COPY ./app ./app

CMD ["npm", "start"]