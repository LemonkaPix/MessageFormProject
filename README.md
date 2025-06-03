# 📬 Message Form Project

## 🧠 Overview

The application allows you to manage messages: add, edit, and delete. The frontend is built with **React**, **RTK Query**, and **ShadCN** components. The backend provides a REST API (Node.js) with full CRUD support.

## ✅ Features

### 📝 Add Message Form
- Text input for message content.
- Validation (no empty messages, SQL injection protection).
- On submit, the message is saved to the database.

### 📄 Message Table
- Displays a list of messages with columns: **ID**, **Message**, **Actions**.
- Actions:
  - **Edit** – opens a popup with an edit form.
  - **Delete** – removes the message after confirmation.

### ⚙️ Backend
- Node.js + Express.
- REST API for CRUD operations.

### 📡 RTK Query
- Handles backend communication.
- Automatic synchronization and caching.

### 🎨 UI with ShadCN
- Ready-to-use ShadCN components.
- Responsive, modern interface.

---

## 🛠️ Requirements

- **Node.js** v18.17.0+
- **Docker** v20.10.11+

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Import the database schema and initial data from `messages.sql` into your database before starting the application.

3. Start the application:
   ```bash
   docker compose up
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## 🧩 Notes

- All forms include validation (including SQL injection protection).
- The interface is responsive and intuitive.
- Both frontend and backend code follow best practices.
- The project starts correctly using `docker compose up`.
