# 📝 Blog API

A simple RESTful API built with **Node.js**, **Express**, **TypeScript**, **PostgreSQL**, and **TypeORM** to manage blog posts. This API supports full **CRUD** operations and includes proper logging and error handling.

---

## 🚀 Features

- Create, read, update, and delete blog posts
- PostgreSQL database integration via TypeORM
- Express middleware for error handling and logging
- Type-safe code using TypeScript
- Organized project structure for scalability

---

## 📦 Tech Stack

- **Node.js**
- **Express**
- **TypeScript**
- **PostgreSQL**
- **TypeORM**
- **dotenv** (for environment config)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/samohiani/blog-api.git
cd blog-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment variables

Create a `.env` file in the root directory and add:

```
PORT=6600
DB_USERNAME=postgres
DB_HOST=localhost
DB_PORT=5433
PASSWORD=1234
DB_NAME=blogs
```

### 4. Run the app

```bash
npm run dev
```

The server should now be running on `http://localhost:6600`.

---

## 🛠️ Scripts

| Command        | Description                     |
| -------------- | ------------------------------- |
| `npm run dev`  | Runs the server in dev mode     |
| `npm run build`| Compiles TypeScript to JavaScript |
| `npm start`    | Runs the compiled app           |

---

## 📬 API Documentation

All available endpoints are documented in the Postman collection below:

👉 [Click here for full API documentation](https://documenter.getpostman.com/view/30125011/2sB2cVdgQ1)

---

## 📚 Example Endpoints

### Create a Post

```http
POST /api/posts/create
```

Body:
```json
{
  "title": "My First Post",
  "content": "This is the content of the post."
}
```

### Get All Posts

```http
GET /api/posts/all
```

### Get a Post by ID

```http
PUT /api/posts/single
```

### Update a Post

```http
PUT /api/posts/update
```

Body:
```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

### Delete a Post

```http
DELETE /api/posts/:id
```

---

## 🙌 Acknowledgements

This project was developed as part of a backend engineering assessment. Thanks for reviewing!

---

## 📩 Contact

If you have any questions or feedback, feel free to reach out on [GitHub](https://github.com/samohiani) or send an email at ohianisammy2005@gmail.com.
