# MUDANÇAS PARA QUE O CONTAINER RECONHEÇA A CONEXÃO COM O BANCO
FROM node:22.16.0-slim

WORKDIR /usr/src/app
COPY package.json ./
COPY . .

# Dependências para o Instant Client e oracledb
RUN apt-get update && \
    apt-get install -y wget unzip libaio1 && \
    mkdir -p /opt/oracle && \
    cd /opt/oracle && \
    wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linuxx64.zip && \
    unzip instantclient-basiclite-linuxx64.zip && \
    rm instantclient-basiclite-linuxx64.zip && \
    echo /opt/oracle/instantclient_21_10 > /etc/ld.so.conf.d/oracle-instantclient.conf && \
    ldconfig

# Instala os pacotes Node.js (oracledb incluso)
RUN npm install

EXPOSE 3333
CMD ["npm", "start"]