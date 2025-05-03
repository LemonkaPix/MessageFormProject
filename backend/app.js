import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import sequelize from "./utils/database.js";

// Initialize environment variables
config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Interview task" });
});

// Get all messages
app.get("/getMessages", async (req, res, next) => {
  try {
    const [data] = await sequelize.query("SELECT * FROM messages");
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
});

// Add new message
app.post("/addMessage", async (req, res, next) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ success: false, message: "Text is required" });
    }
    const [result] = await sequelize.query("INSERT INTO messages (text) VALUES (:text)", {
      replacements: { text },
    });
    res.status(201).json({ success: true, message: "Message added", id: result });
  } catch (error) {
    next(error);
  }
});

// Edit message
app.put("/editMessage/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ success: false, message: "Text is required" });
    }
    const [result] = await sequelize.query("UPDATE messages SET text = :text WHERE id = :id", {
      replacements: { text, id },
    });
    if (result === 0) {
      return res.status(404).json({ success: false, message: "Message not found" });
    }
    res.status(200).json({ success: true, message: "Message updated" });
  } catch (error) {
    next(error);
  }
});

// Delete message
app.delete("/deleteMessage/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const [result] = await sequelize.query("DELETE FROM messages WHERE id = :id", {
      replacements: { id },
    });
    if (result === 0) {
      return res.status(404).json({ success: false, message: "Message not found" });
    }
    res.status(200).json({ success: true, message: "Message deleted" });
  } catch (error) {
    next(error);
  }
});

// Global Error Handling Middleware
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ success: false, message: message, data: data });
});

// DB Connection
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
