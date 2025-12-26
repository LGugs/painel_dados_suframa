# Node LTS compatível com oracledb
FROM node:20-slim

# Dependências do sistema
RUN apt-get update && apt-get install -y \
    libaio-dev \
    wget \
    unzip \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Oracle Instant Client
ENV ORACLE_IC_VERSION=21_20

RUN mkdir -p /opt/oracle && \
    cd /opt/oracle && \
    wget https://download.oracle.com/otn_software/linux/instantclient/2120000/instantclient-basic-linux.x64-21.20.0.0.0dbru.zip && \
    unzip instantclient-basic-linux.x64-21.20.0.0.0dbru.zip && \
    rm instantclient-basic-linux.x64-21.20.0.0.0dbru.zip && \
    echo /opt/oracle/instantclient_${ORACLE_IC_VERSION} > /etc/ld.so.conf.d/oracle-instantclient.conf && \
    ldconfig

WORKDIR /usr/src/app

# Copia apenas manifests primeiro (cache)
COPY package.json package-lock.json* ./
RUN npm install --production

# Copia o restante da aplicação
COPY . .

EXPOSE 3333
CMD ["npm", "run", "start"]
