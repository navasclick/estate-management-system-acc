# Use Node.js 18 LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy root package files first
COPY package.json ./
COPY package-lock.json* ./

# Copy client package files before running npm install
# (root install script runs `npm install --prefix client`)
COPY client/package.json ./client/
COPY client/package-lock.json* ./client/

# Copy server package files before running npm install
# (root install script runs `npm install --prefix server`)
COPY server/package.json ./server/
COPY server/package-lock.json* ./server/

# Install all dependencies (triggers root install script for client + server)
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the client
RUN npm run client:build

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]