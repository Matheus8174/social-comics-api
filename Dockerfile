FROM node:16
WORKDIR /usr/src/social-comics-api
COPY ./package.json .
RUN npm install --only=prod
COPY ./dist ./dist
COPY ./.env .
EXPOSE 3000
CMD npm start
