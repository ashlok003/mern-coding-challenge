# MERN Stack Coding Challenge - README

This is a complete **MERN Stack** project for managing product transactions. The project includes APIs for listing transactions, statistics, bar chart data, and pie chart data, along with a **React** frontend to display the data dynamically.

---

## 📂 Project Structure
```
MERN_Stack_Coding_Challenge/
├── backend/       # Node.js + Express + MongoDB backend
└── frontend/      # React frontend
```

### **Backend Structure**
```
backend/
├── server.js                 # Main entry point for the backend server
├── models/
│   └── Transaction.js        # Mongoose schema for transactions
├── routes/
│   └── api.js                # API routes
└── controllers/
    └── transactionController.js # Controller functions for handling API logic
```

### **Frontend Structure**
```
frontend/
├── public/
│   └── index.html            # HTML entry point
└── src/
    ├── index.js              # React entry point
    ├── App.js                # Main App component
    └── components/
        └── TransactionsTable.js # Component to display transactions table
```

---

## ✅ How to Run the Project on Your Local Machine

### **1. Prerequisites**
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: [Download MongoDB](https://www.mongodb.com/try/download/community)

Ensure both Node.js and MongoDB are installed and running:
```bash
node -v
npm -v
mongod
```

### **2. Clone the Repository**
If you’ve uploaded the project to GitHub, clone it using:
```bash
git clone https://github.com/<your-username>/mern-coding-challenge.git
```

Otherwise, download and extract the ZIP file.

### **3. Running the Backend**
1. Navigate to the backend folder:
   ```bash
   cd MERN_Stack_Coding_Challenge/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
The backend server will run on **http://localhost:5000**.

### **4. Running the Frontend**
1. Open a new terminal window and navigate to the frontend folder:
   ```bash
   cd MERN_Stack_Coding_Challenge/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
The frontend app will open in your browser at **http://localhost:3000**.

---

## ✅ API Endpoints

| **Endpoint**         | **Method** | **Description**                                      | **Example URL**                     |
|----------------------|------------|------------------------------------------------------|-------------------------------------|
| `/api/init`          | GET        | Initialize the database with sample data            | `http://localhost:5000/api/init`    |
| `/api/transactions`  | GET        | Get transactions (with search & pagination)         | `http://localhost:5000/api/transactions?search=laptop&page=1&perPage=10` |
| `/api/statistics`    | GET        | Get statistics for a selected month                 | `http://localhost:5000/api/statistics?month=March` |
| `/api/barchart`      | GET        | Get bar chart data for a selected month             | `http://localhost:5000/api/barchart?month=March`   |
| `/api/piechart`      | GET        | Get pie chart data for a selected month             | `http://localhost:5000/api/piechart?month=March`   |
| `/api/combined`      | GET        | Get combined data from all APIs                     | `http://localhost:5000/api/combined?month=March`   |

---

## ✅ How to Deploy the Project

### **Deploy Backend to Render**
1. Go to [Render](https://render.com) and log in.
2. Click on **New +** and select **Web Service**.
3. Connect your **GitHub repository**.
4. Set the build command:
   ```bash
   npm install
   ```
5. Set the start command:
   ```bash
   npm start
   ```
6. Click **Create Web Service**.

### **Deploy Frontend to Vercel**
1. Go to [Vercel](https://vercel.com) and log in.
2. Click **New Project** and connect your GitHub repository.
3. Select your **frontend** folder for deployment.
4. Click **Deploy**.

---

## ✅ Common Issues and Solutions

| **Issue**               | **Solution**                                                |
|-------------------------|-------------------------------------------------------------|
| `MongoNetworkError`      | Ensure MongoDB service is running (`mongod`).               |
| `PORT already in use`    | Change the port in `server.js` or stop any running process. |
| `npm command not found`  | Ensure Node.js and npm are properly installed.              |
| React app not starting   | Delete `node_modules` folder and run `npm install` again.   |

---

## ✅ Project Workflow
1. **Frontend (React)**:
   - **http://localhost:3000** will display the transactions table, charts, and statistics.
   - Select the month from the dropdown to update the table and charts dynamically.

2. **Backend (Node.js + MongoDB)**:
   - The backend handles API requests and fetches data from the MongoDB database.

---

## ✅ Author
Developed by: **[Ashlok Raj]**

