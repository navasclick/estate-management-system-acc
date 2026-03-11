# Use Node.js 18 LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy client package files and install
COPY client/package*.json ./client/
RUN npm install --prefix client

# Copy source code
COPY . .

# Build the client
RUN npm run client:build

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]