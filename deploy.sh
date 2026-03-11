#!/bin/bash

# Estate Management System Deployment Script

echo "🚀 Starting Estate Management System Deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Set production port (optional, can be set via environment)
export PORT=${PORT:-5000}

echo "🌐 Starting production server on port $PORT..."
echo "✅ Deployment complete!"
echo "📱 Frontend: http://localhost:$PORT"
echo "🔌 Backend API: http://localhost:$PORT/api/*"

# Start the application
npm start