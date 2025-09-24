FROM node:18

RUN npm install -g pm2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["pm2-runtime", "start", "server.js", "--name", "api-automatica"]
