FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm set http-proxy http://proxyad.itau:8080/ && npm set proxy http://proxyad.itau:8080/ && npm set https-proxy http://proxyad.itau:8443/ && npm config set registry http://registry.npmjs.org/ && npm config set strict-ssl false

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
