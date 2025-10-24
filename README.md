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
