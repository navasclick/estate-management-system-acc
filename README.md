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

### Installation

1. Clone the repository
2. Install dependencies for both client and server

#### Client Setup

```bash
cd client
npm install
```

#### Server Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server/` folder containing at least the following keys:

```env
MONGO_URI=mongodb://localhost:27017/estate-management
JWT_SECRET=some_secret_value
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

These values are used by the application for database connectivity, JWTs, and file uploads.

### Running the Application

#### Development

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

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Other**: CORS, dotenv

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
