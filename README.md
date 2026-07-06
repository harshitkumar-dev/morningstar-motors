# CarRental

CarRental is a full-stack MERN car rental booking platform that allows users to browse available cars, book vehicles for selected dates, and manage their bookings easily. The platform includes secure authentication, booking management, and a responsive modern UI for a smooth user experience.

---

## ✨ Features

* User authentication (Signup/Login)
* Browse available rental cars
* Car booking system
* Manage user bookings
* Responsive and modern UI
* Secure backend APIs
* Real-time booking updates
* Admin dashboard for managing cars and bookings
* Easy navigation and user-friendly experience
* You can list your car

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JWT Authentication

---

## 🚀 Installation

### Clone the Repository

```bash id="g4w9dr"
git clone https://github.com/harshitkumar-dev/morningstar-motors
cd car-rental
```

---

## ⚙️ Frontend Setup

```bash id="m2k7vb"
cd client
npm install
```

### Run Frontend Development Server

```bash id="x7f2na"
npm run dev
```

### Build Frontend for Production

```bash id="r6v8ld"
npm run build
```

### Preview Production Build

```bash id="t3q9ys"
npm run preview
```

---

## ⚙️ Backend Setup

```bash id="h8w2pc"
cd server
npm install
```

### Run Backend Server

```bash id="u5n1jk"
npm start
```

### Run Backend in Development Mode

```bash id="e4z7qx"
npm run server
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder and add the following variables:

```env id="j3x8bf"
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

---

## 📂 Project Structure

```bash id="n5r4ut"
car-rental/
│
├── client/         # Frontend (React + Vite)
├── server/         # Backend (Node.js + Express)
├── README.md
└── .gitignore
```

---

## 🔗 Repository

[CarRental GitHub Repository](https://github.com/harshitkumar-dev/morningstar-motors)

---

## 🚀 Future Improvements

* Online payment integration
* Email notifications


---

## 👨‍💻 Author

Harshit Kumar

---

## 📄 License

This project is licensed under the MIT License.
