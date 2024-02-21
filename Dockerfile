FROM node:18-alpine

WORKDIR /app/server

COPY . /app

RUN npm run client

EXPOSE 3001

CMD ["npm", "start"]
