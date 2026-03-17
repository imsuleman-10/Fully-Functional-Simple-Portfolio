# Personal Portfolio Website

A modern, responsive personal portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Project Overview

**Developer:** M. Suleman Zaheer  
**Email:** sulemanzaheer09@gmail.com  
**Location:** Shahdara Town, Lahore, Pakistan

This portfolio showcases personal information, education, skills, projects, and social presence. It demonstrates practical MERN stack skills for potential clients, recruiters, and employers.

## Tech Stack

### Frontend
- React.js (Functional Components + Hooks)
- CSS3 with Flexbox/Grid
- Responsive Design
- Smooth scroll navigation

### Backend
- Node.js
- Express.js
- RESTful API

### Database
- MongoDB Atlas (Cloud-based)

## Features

### Home Section
- Professional introduction
- Quick navigation links
- Call-to-action buttons

### About Section
- Education history (Matriculation, Intermediate, Undergraduate)
- Technical skills (Frontend, Backend, Database, Version Control, Other)

### Projects Section
- MERN Stack ToDo App
- Personal Blog Website
- E-commerce Product Showcase
- Each project includes: description, tech stack, GitHub link, live demo

### Contact Section
- Contact form (Name, Email, Message)
- Backend API integration with MongoDB
- Social media links (Instagram, LinkedIn, TikTok, Facebook)

## Project Structure

```
Personal_Portfolio/
├── client/                 # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                 # Node.js Backend
│   ├── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas cloud)

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```bash
npm start
# or for development
npm run dev
```

The server will run on `http://localhost:5000`

### Frontend Setup

```bash
cd client
npm install
```

Start the React development server:

```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Documentation

### POST /api/contact

Submit a contact message.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message saved successfully."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Deployment

### Frontend
- Vercel (recommended)
- GitHub Pages

### Backend
- Render
- Heroku
- Railway

### Database
- MongoDB Atlas (Cloud-based)

## Social Links

- **Instagram:** https://www.instagram.com/imsuleman.10/
- **LinkedIn:** https://www.linkedin.com/in/suleman-zaheer-mughal
- **TikTok:** https://www.tiktok.com/@imsuleman.10
- **Facebook:** https://web.facebook.com/Iamsuleman.10

## GitHub Repository

https://github.com/imsuleman-10/portfolio-website

## License

This project is for personal portfolio purposes.

---

Built with ❤️ by M. Suleman Zaheer
