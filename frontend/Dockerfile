FROM node:22.16.0-alpine as build

WORKDIR /app

COPY package.json ./
COPY . .

RUN npm install 
RUN npm run build

FROM httpd:2.4-alpine

COPY --from=build /app/dist /usr/local/apache2/htdocs/

EXPOSE 80