# FROM node:12 AS builder
# WORKDIR /app
# COPY ./movies/package.json ./
# RUN npm install
# COPY ./movies .
# RUN npm run build


FROM node:12-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .