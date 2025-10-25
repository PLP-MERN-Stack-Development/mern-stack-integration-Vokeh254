<<<<<<< HEAD
# MERN Blog Application

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The app demonstrates seamless integration between front-end and back-end components, including database operations, API communication, authentication, image uploads, pagination, and more.

---

## 🚀 Features

- **User Authentication:** Register, login, and protected routes using JWT
- **Blog Posts:** Create, read, update, and delete posts
- **Categories:** Organize posts by categories
- **Comments:** Add comments to blog posts
- **Image Upload:** Upload featured images for posts
- **Pagination, Search & Filtering:** Efficient post browsing
- **Responsive UI:** Built with React and Vite
- **State Management:** React hooks and custom API hook
- **REST API:** Express.js + MongoDB

---

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js** (v18+ recommended)
- **MongoDB** (local or remote instance)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-blog.git
cd mern-blog
```

### 2. Server Setup

```bash
cd server
cp .env.example .env      # Edit .env as needed (set MONGO_URI and JWT_SECRET)
npm install
npm run dev
```

- The server will run on [http://localhost:5000](http://localhost:5000) by default.

### 3. Client Setup

```bash
cd ../client
cp .env.example .env      # Edit .env if your API URL differs
npm install
npm run dev
```

- The client will run on [http://localhost:5173](http://localhost:5173) by default.
- The Vite dev server proxies API requests to the Express server.

---

## 📂 Project Structure

```
mern-blog/
  client/    # React frontend (Vite)
  server/    # Express + Node backend
```

---

## ⚡ Usage

1. **Register a new user** or log in using the UI.
2. **Create a post:** Add title, content, category, and optional featured image.
3. **Browse posts:** Paginate, search, or filter by category.
4. **Edit or delete your posts** (protected).
5. **Comment** on posts when logged in.

---

## 🧩 Environment Variables

### **Server (.env)**
- `PORT=5000`
- `MONGO_URI=mongodb://localhost:27017/mernblog`
- `JWT_SECRET=your_jwt_secret`

### **Client (.env)**
- `VITE_API_URL=http://localhost:5000/api`

---

## 🔐 Authentication

- Uses JWT tokens for protected API routes.
- Token must be included in the `Authorization` header (`Bearer <token>`).

---

## 🖼️ Image Uploads

- Images are uploaded to the `/uploads` directory on the server.
- Posts can include a featured image.

---

## 🤝 Contributing

Pull requests are welcome! Please fork the repo and submit your changes via a PR.

---

## 📄 License

[MIT](LICENSE)

---

## 🙋‍♂️ Questions?

Open an issue or contact the maintainer.
=======
# MERN Stack Integration Assignment

This assignment focuses on building a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates seamless integration between front-end and back-end components.

## Assignment Overview

You will build a blog application with the following features:
1. RESTful API with Express.js and MongoDB
2. React front-end with component architecture
3. Full CRUD functionality for blog posts
4. User authentication and authorization
5. Advanced features like image uploads and comments

## Project Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week4-Assignment.md` file
4. Complete the tasks outlined in the assignment

## Files Included

- `Week4-Assignment.md`: Detailed assignment instructions
- Starter code for both client and server:
  - Basic project structure
  - Configuration files
  - Sample models and components

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete both the client and server portions of the application
2. Implement all required API endpoints
3. Create the necessary React components and hooks
4. Document your API and setup process in the README.md
5. Include screenshots of your working application

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/) 
>>>>>>> 8b97f325fbc8aa566ea30610ee5e62326d2b7dce
