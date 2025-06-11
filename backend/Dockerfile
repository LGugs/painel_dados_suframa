FROM node:22.16.0-alpine

WORKDIR /usr/src/app
COPY package.json ./
COPY . .

RUN npm install

EXPOSE 3333

CMD ["npm", "start"]