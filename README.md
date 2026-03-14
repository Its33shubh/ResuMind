# ResuMind – AI Career Intelligence Platform (Backend)

ResuMind is an AI-powered career intelligence platform designed to help users improve their resumes, prepare for interviews, and discover relevant job opportunities.

The platform analyzes user resumes, calculates ATS scores, detects skill gaps, and provides AI-powered career insights.

This repository contains the **backend APIs built using Node.js and Express.js**.

---

## 🚀 Project Status

This project is currently **under development**.

### ✅ Implemented Features

* User Registration API
* User Login API
* Password hashing using bcrypt
* JWT Authentication
* Protected Routes Middleware
* Get User Profile API
* Update User Profile API

---

### 🔄 Features In Progress / Planned

* Resume upload system
* Resume text extraction (PDF/DOCX parsing)
* AI-based resume analysis
* ATS score generation
* Skill gap detection
* Interview question generation
* Job recommendation system

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcryptjs

### Planned Integrations

* Multer (for resume uploads)
* pdf-parse / Mammoth.js (resume parsing)
* OpenAI API (AI resume analysis)

---

## 📂 Project Structure

```
resumind-backend
│
├── controllers
├── models
├── routes
├── middleware
├── config
├── server.js
└── package.json
```

---

## 🔗 API Endpoints

### Authentication

POST /api/auth/register
POST /api/auth/login

### User Profile

GET /api/user/profile
PUT /api/user/profile

---

## 🎯 Project Goal

The goal of ResuMind is to build a **complete AI-powered career assistant** that helps users:

* Improve their resumes
* Identify missing skills
* Prepare for interviews
* Discover suitable job opportunities

---

## 👨‍💻 Developer

**Shubham Kaklotar**
BCA Graduate | Backend Developer

GitHub: https://github.com/Its33shubh
LinkedIn: https://linkedin.com/in/shubham-kaklotar
