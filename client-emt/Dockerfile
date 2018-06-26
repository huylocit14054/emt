FROM node:8

WORKDIR /client-emt

COPY package*.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 80

CMD ["npm", "start"]

