FROM maven:3.8.4-openjdk-8 AS buildstage

WORKDIR /client/src

COPY package*.json ./

RUN npm install

COPY app ./

RUN npm run build --prod

EXPOSE 4200


CMD ["npm", "run", "start"]

