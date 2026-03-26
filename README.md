# Estate Management System

A full-stack web application for managing estates, built with React frontend and Node.js backend.

## Project Structure

```bash
estate-management-system
├── client (React Frontend)
│   ├── components
│   ├── pages
│   ├── services
│   └── utils
└── server (Node Backend)
    ├── controllers
    ├── routes
    ├── models
    ├── middleware
    └── config
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository
2. Install dependencies for both client and server

```bash
npm install
```

### Environment Setup

Create a `.env` file in the `server/` folder with the following variables:

```env
# Database
MONGO_URI=mongodb://localhost:27017/estateDB

# JWT Secret for authentication
JWT_SECRET=your_jwt_secret_key_here

# Cloudinary configuration (for file uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email configuration (for notifications)
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

# Port (optional, defaults to 5000)
PORT=5000
```

## Development

### Running Locally

Start both client and server in development mode:

```bash
npm run dev
```

This will start:

- Frontend: `http://localhost:5174`
- Backend: `http://localhost:5000`

### Building for Production

```bash
npm run build
```

## Deployment

### Option 1: Manual Deployment

1. Build the application:

   ```bash
   npm run prod
   ```

2. The server will serve both API and static files on the specified port.

### Option 2: Docker Deployment

Build and run with Docker:

```bash
# Build the image
docker build -t estate-management .

# Run the container
docker run -p 5000:5000 --env-file server/.env estate-management
```

### Option 3: Cloud Platforms

#### Railway

1. Connect your GitHub repository
2. Set environment variables in Railway dashboard
3. Deploy automatically

#### Render

1. Create a new Web Service
2. Connect your repository
3. Set build command: `npm run build`
4. Set start command: `npm start`
5. Configure environment variables

#### Heroku

1. Create a new app
2. Set buildpacks for Node.js
3. Configure environment variables
4. Deploy via Git or GitHub integration

### Environment Variables for Production

Make sure to set these environment variables in your deployment platform:

- `MONGO_URI`: Your MongoDB connection string
- `JWT_SECRET`: A secure random string for JWT tokens
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: For file uploads
- `EMAIL_USER`, `EMAIL_PASS`: For email notifications
- `PORT`: The port your app will run on (provided by most platforms)

## API Documentation

### Churches

- `GET /api/churches` - Get all churches
- `POST /api/churches` - Create a new church
- `PUT /api/churches/:id` - Update a church
- `DELETE /api/churches/:id` - Delete a church

## Technologies Used

- **Frontend**: React, Vite, React Router, Material-UI
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT
- **File Upload**: Cloudinary
- **Email**: Nodemailer

### Running the Application

#### Development Setup

Start the backend server:

```bash
cd server
npm run dev
```

Start the frontend development server:

```bash
cd client
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`.

#### Production

Build the frontend:

```bash
cd client
npm run build
```

Start the backend:

```bash
cd server
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
