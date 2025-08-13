# 🚚 Driver Dashboard

A modern, full-stack web application for driver registration and dashboard management.  
Easily upload profile pictures and truck documents, view driver details, and manage your fleet with a clean, responsive interface.

---

## ✨ Features

- **Driver Registration:**  
  Register new drivers with essential details and upload profile pictures and truck documents.

- **Dynamic Dashboard:**  
  Instantly view registered driver information and uploaded files.

- **File Uploads:**  
  Securely store profile images and documents using Multer and MongoDB.

- **Responsive Design:**  
  Optimized for desktop and mobile devices.

- **RESTful API:**  
  Built with Node.js, Express, and MongoDB (Atlas).

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Axios, CSS
- **Backend:** Node.js, Express, Multer, Mongoose
- **Database:** MongoDB Atlas
- **Deployment:** Vercel (frontend), Heroku/Render (backend)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Coldsummers/driver-dashboard.git
cd driver-dashboard
```

### 2. Install dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd ../backend
npm install
```

### 3. Configure environment variables

- **Frontend:**  
  Create a `.env` file in `/frontend` and set your backend API URL:
  ```
  VITE_API_URL=http://localhost:5000
  ```
- **Backend:**  
  Create a `.env` file in `/backend` and add your MongoDB Atlas URI:
  ```
  MONGODB_URI=your_mongodb_atlas_connection_string
  ```

### 4. Run the app locally

**Backend:**
```bash
node app.js
```
or
```bash
npx nodemon app.js
```

**Frontend:**
```bash
npm run dev
```

---

## 🌐 Live Demo

> _Coming soon!_  
> Deploy easily to [Vercel](https://vercel.com/) (frontend) and [Heroku](https://heroku.com/) or [Render](https://render.com/) (backend).

---

## 📁 Project Structure

```
driver-dashboard/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── app.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── index.html
│   └── ...
│
└── README.md
```

---

## 💡 Contributing

Pull requests are welcome!  
Feel free to open issues for suggestions or bug reports.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Samuel Kodi**  
[GitHub Profile](https://github.com/Coldsummers)

---

> _“Drive innovation. Manage with style.”_
