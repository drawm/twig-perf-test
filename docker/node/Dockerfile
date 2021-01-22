FROM node:alpine

RUN mkdir /node
RUN chown 777 /node
WORKDIR /node

COPY ./node-src .
RUN pwd
RUN ls -lah

RUN yarn install
ENTRYPOINT node index.js
