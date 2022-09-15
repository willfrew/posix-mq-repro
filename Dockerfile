FROM node:18
RUN mkdir /app
WORKDIR /app

ADD ./package.json ./package-lock.json ./
RUN npm install

ADD ./repro.js ./
CMD ["node", "./repro.js"]
