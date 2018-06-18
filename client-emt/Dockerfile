FROM node:8

COPY package*.json .
COPY yarn.lock .

WORKDIR /client-emt

RUN yarn install

COPY . .

EXPOSE 80

CMD ["npm", "start"]

