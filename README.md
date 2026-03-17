# 💰 Wallet Dashboard Application

A full-stack wallet dashboard application built using **React** and **Node.js (Express)**.  
This application enables users to manage wallet balances, perform transactions, and view real-time updates with a clean and responsive UI.

---

## 🚀 Live Demo

- 🔗 **Frontend (Vercel):** https://wallet-dashboard-hazel.vercel.app/  
- 🔗 **Backend (Render):** https://wallet-backend-4rfm.onrender.com  

---

## ✨ Features

### 🔹 Frontend (React)
- Responsive and modern dashboard UI
- Component-based architecture (reusable components)
- Wallet balance display with real-time updates
- Interactive chart for wallet activity
- Transaction history with status indicators
- Modals for:
  - Deposit money
  - Withdraw money
  - Add bank account
- Client-side routing (Home, Customers, Settings)

---

### 🔹 Backend (Node.js + Express)
- RESTful API architecture
- Wallet balance management (deposit & withdrawal)
- Transaction history tracking
- Bank account management
- In-memory data handling (for demo purposes)

---

### 🔹 API Integration
- Axios used for API communication
- Real-time UI updates after API calls
- Proper state management using React hooks (`useState`, `useEffect`)

---

## 🛠️ Tech Stack

| Layer       | Technology            |
|------------|----------------------|
| Frontend   | React (Vite), CSS    |
| Backend    | Node.js, Express     |
| Charts     | Recharts             |
| API Calls  | Axios                |
| Routing    | React Router         |
| Deployment | Vercel, Render       |
| Version Control | Git & GitHub   |

---

## 📂 Project Structure

wallet-dashboard/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── styles/
│
└── server/ # Node.js backend
├── controllers/
├── routes/
└── data/

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|--------|-------------|
| GET    | `/api/dashboard` | Get dashboard data |
| POST   | `/api/wallet/deposit` | Deposit money |
| POST   | `/api/wallet/withdraw` | Withdraw money |
| POST   | `/api/banks` | Add bank account |
| GET    | `/api/transactions` | Get transaction history |

---

## ⚙️ Setup Instructions

### 🔹 Backend Setup
```bash
cd server
npm install
npm run dev
🔹 frontend Setup
cd client
npm install
npm run dev
