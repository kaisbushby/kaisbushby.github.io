# pull node image
FROM node:lts-alpine as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./