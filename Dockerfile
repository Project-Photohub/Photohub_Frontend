FROM node:20.14

WORKDIR /user/src/app

COPY package.json .

COPY . .

RUN npm build

EXPOSE 5173

CMD ["npm", "dev"]