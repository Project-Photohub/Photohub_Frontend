# node 프로덕션 배포 환경 구축
FROM node:20.14 AS node

WORKDIR /user/src/app

# package.json 로드
COPY package.json .

# 패키지 다운로드
RUN npm install

# 파일 로드
COPY . .

# 프로덕션용 파일 빌드
RUN npm run build

# WS 엔진 환경 구축
FROM nginx

# nginx 구동 폴더로 프로덕션 빌드 파일 전송
COPY --from=node ./dist /usr/share/nginx/html

# 도커를 5173 포트와 연결
EXPOSE 5173

# nginx 백그라운드 환경으로 실행
CMD ["nginx", "-g", "daemon off;"]