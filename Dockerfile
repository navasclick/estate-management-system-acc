# Use Node.js 18 LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy root package files
COPY package*.json ./

# Copy client package files
COPY client/package*.json ./client/

# Copy server package files
COPY server/package*.json ./server/

# Install all dependencies
RUN npm install

# Copy source code
COPY . .

# Build the client
RUN npm run client:build

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]

# Start the application
CMD ["npm", "start"]