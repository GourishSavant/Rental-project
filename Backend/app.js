
import express from 'express';
import employeeRoutes from './routes/EmployeeRoute.js';
import employeeLogin from './routes/EmployeeLogin.js';
import ProductRoute from './routes/ProductRoute.js';
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
app.use(express.json());
app.use('/users', employeeRoutes, employeeLogin,ProductRoute);

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
