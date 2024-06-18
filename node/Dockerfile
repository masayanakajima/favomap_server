FROM node:16.17

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

RUN apt-get update
RUN apt-get install -y default-mysql-client

COPY . .