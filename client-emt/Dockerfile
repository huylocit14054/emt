FROM node:8-alpine

WORKDIR /client-emt

COPY package*.json .
COPY yarn.lock .

RUN yarn --pure-lockfile

COPY . .

EXPOSE 80

CMD ["yarn", "start"]

