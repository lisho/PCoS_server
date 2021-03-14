
FROM node:10.13-alpine

# create & set working directory
RUN mkdir -p /usr/server
WORKDIR /usr/server

# copy source files
COPY . /usr/server

RUN npm install

COPY . .

EXPOSE 3030

CMD node index.js
