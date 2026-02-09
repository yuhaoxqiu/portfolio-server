# Stage 1: Build frontend
FROM node:20-slim AS frontend-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:client

# Stage 2: Build backend
FROM node:20-slim AS backend-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:server

# Stage 3: Final production image
FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=frontend-build /app/dist/client ./dist/client
COPY --from=backend-build /app/dist/server ./dist/server

EXPOSE 3001
ENV PORT=3001
CMD ["npm", "start"]
