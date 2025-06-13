# MUDANÇAS PARA QUE O CONTAINER RECONHEÇA A CONEXÃO COM O BANCO
FROM node:22.16.0-slim

# Variável para o Oracle Instant Client
ENV LD_LIBRARY_PATH=/opt/oracle/instantclient_21_10

WORKDIR /usr/src/app
COPY package.json ./
COPY . .

# Dependências para o Instant Client e oracledb
RUN apt-get update && \
    apt-get install -y wget unzip libaio1 && \
    mkdir -p /opt/oracle && \
    cd /opt/oracle && \
    wget https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linux.x64-21.10.0.0.0dbru.zip && \
    unzip instantclient-basiclite-linux.x64-21.10.0.0.0dbru.zip && \
    rm instantclient-basiclite-linux.x64-21.10.0.0.0dbru.zip && \
    echo /opt/oracle/instantclient_21_10 > /etc/ld.so.conf.d/oracle-instantclient.conf && \
    ldconfig

# Instala os pacotes Node.js (oracledb incluso)
RUN npm install

EXPOSE 3333
CMD ["npm", "start"]