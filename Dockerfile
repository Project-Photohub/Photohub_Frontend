FROM node:20.14

WORKDIR /user/src/app

COPY package.json .

RUN npm

COPY . .

RUN npm build

EXPOSE 5173

CMD ["npm", "dev"]