
import express from 'express';
import db from '../db.js';
import bcrypt from 'bcrypt';
import authenticateToken from '../Middleware/AuthLogin.js';

const router = express.Router();

router.post('/register',authenticateToken,
  async (req, res) => {
    const { role, fullName, email, password } = req.body;

    if (!role || !fullName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Only admin can register users' });
  }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const query = `INSERT INTO employees (fullName, email, password, role) VALUES (?, ?, ?, ?)`;

      db.run(query, [fullName, email, hashedPassword, role], function (err) {
        if (err) {
          if (err.message.includes("UNIQUE constraint failed")) {
            return res.status(409).json({ message: 'Email already exists' });
          }
          return res.status(500).json({ message: 'Database error', error: err.message });
        }
        return res.status(201).json({ message: 'User registered successfully', userId: this.lastID });
      });
    } catch (error) {
      res.status(500).json({ message: 'Error hashing password', error: error.message });
    }
  }
);

router.get('/me', authenticateToken, (req, res) => {
  const { id, fullName, email, role } = req.user; 
  res.status(200).json({ id, fullName, email, role });
});

router.get('/getUsers', authenticateToken, (req, res) => {
  db.all(`SELECT id, fullName, email, role FROM employees`, [], (err, rows) => {
    if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Only admin can register users' });
    }
    if (err) return res.status(500).json({ message: 'Database error', error: err.message });
    res.status(200).json(rows);
  });
});

router.delete('/delete/:id', authenticateToken, async (req, res) => {
  const userId = req.params.id;
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Only admin can register users' });
  }
  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const result = await new Promise((resolve, reject) => {
      db.run(`DELETE FROM employees WHERE id = ?`, [userId], function (err) {
        if (err) return reject(err);
        resolve(this);
      });
    });

    if (result.changes === 0) {
      return res.status(404).json({ message: 'User not found or already deleted' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
});

router.get('/', (req, res) => {
  res.send('Route is working!');
});

export default router;
