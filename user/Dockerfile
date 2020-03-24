# FROM node:12 AS builder
# WORKDIR /app
# COPY ./user/package.json ./
# RUN npm install
# COPY ./user/ .
# RUN npm run build


FROM node:12-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .