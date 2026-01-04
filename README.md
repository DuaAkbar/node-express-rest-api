# Node Express REST API

A **RESTful backend API** built using **Node.js** and **Express.js**, with MongoDB integration for data storage.  
This project demonstrates clean architecture, modular code structure, and scalability — ideal for freelance backend work.

---

## 🚀 Features

- CRUD operations for managing collections  
- Express.js routing with modular controllers  
- MongoDB integration using Mongoose  
- Error handling with middleware  
- Logging middleware for request tracking  
- Configurable database connection  

---

## 🛠️ Tech Stack

- **Node.js** – Server runtime  
- **Express.js** – Web framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB ODM  
- **Middleware** – Error handling & logging  

---

## 📁 Project Structure

server.js
package.json
src/
├─ controllers/
├─ routes/
├─ models/
├─ middlewares/
└─ config/
└─ connectToDatabase.js
.gitignore
README.md


---

## ⚡ Getting Started

1. Clone the repository:
```bash
git clone https://github.com/DuaAkbar/node-express-rest-api.git

2. Navigate into the project directory:
cd node-express-rest-api

3. Install dependencies:
npm install

4.Create a .env file with your MongoDB connection string:
MONGO_URI=your_mongodb_connection_string

5.Run the server:
npm run dev


🔐 Security
Passwords and sensitive data are never committed

.env file is ignored using .gitignore

Configurable DB connection allows secure setup


📌 Usage
Test API endpoints using Postman or Insomnia

Import routes as needed for CRUD operations

Extendable for authentication or additional features