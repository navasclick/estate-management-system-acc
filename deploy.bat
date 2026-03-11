@echo off
REM Estate Management System Deployment Script for Windows

echo 🚀 Starting Estate Management System Deployment...

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Build the application
echo 🔨 Building application...
call npm run build

REM Set production port (optional, can be set via environment)
if "%PORT%"=="" set PORT=5000

echo 🌐 Starting production server on port %PORT%...
echo ✅ Deployment complete!
echo 📱 Frontend: http://localhost:%PORT%
echo 🔌 Backend API: http://localhost:%PORT%/api/*

REM Start the application
call npm start