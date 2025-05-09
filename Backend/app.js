
import express from 'express';
import employeeRoutes from './routes/EmployeeRoute.js';
import employeeLogin from './routes/EmployeeLogin.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', employeeRoutes, employeeLogin);

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
