
FROM node:18-alpine AS base
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install --production
RUN npm ci --omit=dev
COPY . .

ENV PORT=3000

EXPOSE 3000
CMD ["node", "server.js"]

