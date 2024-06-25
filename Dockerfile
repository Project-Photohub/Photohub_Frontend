# node 프로덕션 배포 환경 구축
FROM node:20.14 AS node

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

# nginx 기본 설정 파일 제거
RUN rm /etc/nginx/conf.d/default.conf

# 수동 설정 파일 로드
COPY ./nginx/nginx.conf /etc/nginx/conf.d

# 도커를 nginx, vite가 있는 80 포트와 연결
EXPOSE 5173

# nginx 백그라운드 환경으로 실행
CMD ["nginx", "-g", "daemon off;"]