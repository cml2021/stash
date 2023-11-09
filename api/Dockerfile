FROM node:18
WORKDIR /api
COPY . .
RUN npm install
RUN npm install -g sequelize-cli
EXPOSE 3000
CMD ["npm", "start"]
