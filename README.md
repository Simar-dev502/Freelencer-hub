# 🚀 FreelanceHub Pro

A full-stack freelance marketplace platform inspired by Upwork and Fiverr, built with the MERN Stack. FreelanceHub Pro enables clients to hire skilled freelancers, manage projects, communicate in real-time, handle payments securely, and showcase professional portfolios through a modern and responsive web application.

## 🌟 Key Features

### 🔐 Authentication & Security

* JWT Authentication
* bcrypt Password Hashing
* Protected Routes
* Role-Based Access Control (Admin, Client, Freelancer)

### 👨‍💻 Freelancer Features

* Professional Profile Management
* Portfolio & Resume Upload
* Profile Picture Upload
* Apply for Jobs
* Saved Jobs
* Favorite Clients
* Real-Time Messaging
* Ratings & Reviews
* Earnings Dashboard

### 🏢 Client Features

* Post, Edit & Delete Jobs
* Search & Filter Applicants
* Hire Freelancers
* Contract Management
* Payment Processing
* Real-Time Chat
* Application Tracking

### ⭐ Marketplace Features

* Advanced Job Search
* Category Filtering
* Personalized Recommendations
* Saved Jobs Wishlist
* Recently Viewed Jobs
* Featured Freelancers
* Top Rated Freelancer Badge

### 💬 Communication

* Real-Time Chat with Socket.IO
* Notifications System
* Conversation History
* Online User Status

### 💳 Payments & Contracts

* Razorpay Integration
* Contract Management
* Payment History
* Earnings Tracking
* Hiring Workflow

### ☁️ Cloud Storage

* Cloudinary Integration
* Resume Upload
* Portfolio Showcase
* Project Gallery

### 🛠️ Admin Panel

* User Management
* User Verification
* Reports System
* Platform Analytics
* Revenue Tracking

## 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Router DOM
* Axios
* React Icons
* Socket.IO Client

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Socket.IO
* Multer
* Cloudinary
* Razorpay

### Deployment

* Vercel
* Render
* MongoDB Atlas
* Cloudinary

## 📂 Project Structure

```plaintext
FreelanceHub-Pro
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
└── README.md
```

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Simar-dev502/FreelanceHub-Pro.git
cd FreelanceHub-Pro
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

## 🔑 Environment Variables

Create `.env` file inside server folder:

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_SECRET=


## 🎯 Future Enhancements

* AI Job Matching
* AI Proposal Generator
* Video Calling
* Team Collaboration
* Organization Accounts
* Multi-Language Support
* Progressive Web App (PWA)

## 👨‍💻 Developer

**Simarjeet Kaur**

Computer Science Engineering Student | Full Stack Developer | AI Enthusiast

GitHub: https://github.com/Simar-dev502

LinkedIn: https://www.linkedin.com/in/simarjeet-kaur-734b3729b/

---

⭐ If you found this project useful, please consider giving it a star!
