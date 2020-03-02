FROM node:12
WORKDIR /usr/src/app
COPY ./www .
RUN npm install
EXPOSE 8081
CMD [ "npm", "start"]
