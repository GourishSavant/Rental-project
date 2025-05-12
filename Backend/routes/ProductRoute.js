import express from 'express';
import db from '../db.js';

const router = express.Router();


router.get('/', (req, res) => {
  db.all('SELECT * FROM cars', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});


router.post('/addcar', (req, res) => {
  const { year, title, subtitle, type, seats, doors, luggage, price, image } = req.body;
  const query = `
    INSERT INTO cars (year, title, subtitle, type, seats, doors, luggage, price, image)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.run(query, [year, title, subtitle, type, seats, doors, luggage, price, image], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID });
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM cars WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ message: 'Car not found' });
    res.json({ message: 'Car deleted successfully' });
  });
});

export default router;
