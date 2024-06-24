FROM node:20.14

WORKDIR /user/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "build"]