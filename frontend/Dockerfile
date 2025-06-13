FROM node:22.16.0-alpine as build

WORKDIR /usr/src/app
COPY package.json ./
COPY . .

RUN npm install
RUN npm run build

FROM httpd:2.4-alpine

# Copia o build para o diretório padrão do Apache
COPY --from=build /usr/src/app/dist /usr/local/apache2/htdocs/

# Substitui a porta 80 por 8080 no Apache
RUN sed -i 's/Listen 80/Listen 8080/' /usr/local/apache2/conf/httpd.conf

EXPOSE 8080