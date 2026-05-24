# BDA CRM Dashboard

A full-stack MERN CRM dashboard for managing leads, sales pipelines, client communication workflows, and team performance metrics for a manufacturing company.



## Features

- User Authentication (JWT)
- Dashboard Analytics
- Lead Management CRUD
- Sales Pipeline Tracking
- Team Performance Metrics
- Responsive Sidebar Layout
- MongoDB Database Integration

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## Folder Structure

client/
server/

---

## Environment Variables

Create a `.env` file inside the `server` folder:



---

## Installation

### Clone Repository

```bash
git clone your_repo_link
```

---

## Backend Setup

```bash
cd server
npm install
npm start
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## API Routes

### Authentication
- POST `/api/auth/register`
- POST `/api/auth/login`

### Leads
- GET `/api/leads`
- POST `/api/leads`
- PUT `/api/leads/:id`
- DELETE `/api/leads/:id`

---

## Future Improvements

- Role-based access
- Charts & analytics
- Real-time notifications
- Kanban board workflow

---

## Author

Vikram Singh