
import express from 'express';
import dotenv from 'dotenv';
import db from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authenticateToken from '../Middleware/AuthLogin.js';

dotenv.config();
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM employees WHERE email = ?`, [email], async (err, user) => {
    if (err || !user) return res.status(401).json({ message: 'Invalid email or password' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ message: 'Invalid email or password' });

    const payload = { id: user.id, role: user.role, email: user.email };
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRE
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRE
    });

    db.run(`INSERT INTO tokens (userId, refreshToken) VALUES (?, ?)`, [user.id, refreshToken]);

    res.json({ accessToken, id: user.id,
      role: user.role,
      email: user.email });
  });
});

router.post('/refresh', authenticateToken,(req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.sendStatus(401);

  db.get(`SELECT * FROM tokens WHERE refreshToken = ?`, [refreshToken], (err, tokenRow) => {
    if (err || !tokenRow) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);

      const payload = { id: user.id, role: user.role };
      const newAccessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRE
      });

      res.json({ accessToken: newAccessToken });
    });
  });
});

router.get('/profile', authenticateToken, (req, res) => {
  res.status(200).json({
    message: `Welcome user ${req.user.id} with role ${req.user.role}`,
    user: req.user
  });
});

export default router;
