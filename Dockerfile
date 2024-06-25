# node 프로덕션 배포 환경 구축
FROM node:20.14 AS node

# 파일 로드
COPY . .

# 패키지 다운로드
RUN npm install

# 프로덕션용 파일 빌드
RUN npm run dev