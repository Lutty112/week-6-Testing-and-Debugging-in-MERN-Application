# 🐞 MERN Bug Tracker - Summary Document

## 🚀 Project Overview

A simple Bug Tracker application using the MERN stack (MongoDB, Express.js, React, Node.js). The app supports full CRUD functionality and emphasizes best practices in testing and debugging.

---

## 🔹 Features Implemented

* Report new bugs
* View all reported bugs
* Update bug status (e.g., Open, In Progress, Resolved)
* Delete bugs
* Styled with Tailwind CSS
* Fully tested (frontend and backend)

---

## 🤝 Technologies Used

### Frontend:

* React (Vite setup)
* Tailwind CSS
* React Testing Library
* Vitest

### Backend:

* Node.js + Express
* MongoDB + Mongoose
* Jest + Supertest
* MongoDB Memory Server

---

## 📚 Project Folder Structure

```
mern-bug-tracker/
├── Backend/
│   ├── controllers/
│   │   └── bugController.js
│   ├── models/
│   │   └── Bug.js
│   ├── routes/
│   │   └── bugRoutes.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── tests/
│   │   ├── bug.test.js
│   │   └── setup.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── test/ 
│   │   │   ├── Home.test.jsx
│   │   │   └── setup.js
│   │   ├── components/
│   │   │   ├── BugForm.jsx
│   │   │   └── BugList.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   ├── App.jsx
│   │   └── index.css
│   ├── vite.config.js
│   ├─  vitest.config.js
│   └── tailwind.config.js
```

---

## 🚧 Setup Instructions

### Backend:

```bash
cd Backend
pnpm install
pnpm run dev
```

### Frontend:

```bash
cd frontend
pnpm install
pnpm run dev
```

---

## 🔮 Testing Instructions

### Backend Testing:

```bash
pnpm test
```

* Full integration tests for API routes
* In-memory MongoDB used to avoid DB side-effects

### Frontend Testing:

```bash
pnpm test
```

* Unit tests: `BugForm`, `BugList`
* Integration test: `Home` page (form + fetch + submit)
* API methods mocked via `vi.mock()`

---

## 🔍 Debugging Tools Used

* Console logs (React + Node)
* Postman (API endpoint testing)
* Chrome DevTools (React UI, network tab)
* Node Inspector (`--inspect-brk`)

Optional:

* React error boundaries for UI safety (can be added)

---

## ✅ Final Coverage Checklist

| Task                         | Status     |
| ---------------------------- | ---------- |
| Project Setup (Full Stack)   | ✅ Done     |
| Core Features Implemented    | ✅ Done     |
| Backend Integration Testing  | ✅ Done     |
| Frontend Component Testing   | ✅ Done     |
| Frontend Integration Testing | ✅ Done     |
| Debugging Demonstrated       | ✅ Done     |
| README Documentation         | ✅ Done     |
| Error Boundaries (Frontend)  | ⚪ Optional |

---

## 👨‍💼 Author

Prepared by: **Lutfia Mosi**
GitHub Account: **Lutty112**
