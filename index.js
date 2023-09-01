const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 5000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movitec'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  }
  console.log('MySQL connected.');
});


app.use(express.json());
app.use(cors());


app.post('/api/contact', (req, res) => {
  const { name, phone, email, company, subject, message } = req.body;
  const sql = 'INSERT INTO tablemovitec (name, phone, email, company, subject, message) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [name, phone, email, company, subject, message];
  db.query(sql, values, (error, results) => {
    if (error) {
      console.error('Error saving contact information:', error);
      res.status(500).json({ error: 'Failed to save contact information.' });
    } else {
      console.log('Contact information saved:', results);
      res.status(201).json({ message: 'Contact information saved successfully!' });
    }
  });
});

app.post('/demand', (req, res) => {
  const { name, phone, email, company, number, message } = req.body;
  const sql = 'INSERT INTO demand (name, phone, email, company, number, message) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [name, phone, email, company, number, message];
  db.query(sql, values, (error, results) => {
    if (error) {
      console.error('Error saving demand information:', error);
      res.status(500).json({ error: 'Failed to save demand information.' });
    } else {
      console.log('Demand information saved:', results);
      res.status(201).json({ message: 'Demand information saved successfully!' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});