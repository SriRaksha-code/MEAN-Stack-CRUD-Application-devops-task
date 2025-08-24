# Stage 1: Base
FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy all backend files
COPY . .

# Environment variables
ENV PORT=3000
ENV MONGO_URI=mongodb://root:example@mongo:27017/?authSource=admin

EXPOSE 3000

CMD ["node", "server.js"]
