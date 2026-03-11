# Postman API Testing Guide

## 🚀 Quick Start

1. **Import the Collection**

   - Open Postman
   - Click "Import" button
   - Select "File"
   - Choose `EstateManagementAPI.postman_collection.json`

2. **Set Environment Variables**

   - Create a new environment in Postman
   - Add variables:

     - `baseUrl`: `http://localhost:3000` (or your deployment URL)
     - `authToken`: (will be set automatically after login)

3. **Test the API**

   - Start with **Authentication > Register User** (if needed)
   - Then **Authentication > Login** (sets auth token automatically)
   - Test other endpoints using the stored token

## 📋 Available Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Churches (Admin Only)

- `POST /api/churches/add` - Add new church
- `GET /api/churches` - Get all churches
- `GET /api/churches/search?keyword=...` - Search churches

### Lands

- `POST /api/lands/add` - Add new land (with optional image)
- `GET /api/lands` - Get all lands
- `PUT /api/lands/update/:id` - Update land

### Dashboard

- `GET /api/dashboard/stats` - Get dashboard statistics

## 🔐 Authentication Notes

- Most endpoints require JWT token in Authorization header
- Token is automatically stored after successful login
- Format: `Bearer {{authToken}}`

## 📝 Sample Data

### Register Admin User

```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "password123",
  "role": "admin"
}
```

### Add Church

```json
{
  "churchName": "St. Mary's Church",
  "location": "Downtown",
  "pastorName": "Father John",
  "contactNumber": "+1234567890",
  "email": "stmary@example.com"
}
```

### Add Land

Use Form-Data with fields:

- `landName`: "Church Property A"
- `location`: "123 Main St"
- `area`: "5000"
- `churchId`: "60f7b3b3b3b3b3b3b3b3b3b3" (MongoDB ObjectId)
- `image`: (optional file upload)

## 🐛 Troubleshooting

- **401 Unauthorized**: Check if you're logged in and token is set
- **500 Server Error**: Check server logs for database connection issues
- **Connection Refused**: Ensure server is running on port 3000

## 🌐 Production Testing

When deployed to production, update the `baseUrl` variable to your deployment URL:

- Railway: `https://your-app.railway.app`
- Render: `https://your-app.onrender.com`
- Heroku: `https://your-app.herokuapp.com`
