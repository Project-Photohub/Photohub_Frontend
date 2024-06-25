FROM node:20.14 AS node

# 파일 로드
COPY . .

# 패키지 다운로드
RUN npm install

EXPOSE 5173

RUN npm run dev