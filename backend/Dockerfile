
FROM node:18-alpine AS base
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install
COPY . .

ENV PORT=3000

EXPOSE 3000
CMD ["node", "server.js"]

