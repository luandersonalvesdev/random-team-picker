FROM node:16.19.1-alpine3.17

WORKDIR /api

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]