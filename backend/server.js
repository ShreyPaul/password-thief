// backend/server.js
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('temp/build'));

app.get('/api/policies', (req, res) => {
  res.json({
    policies: [
      "Use passwords between 15–64 characters",
      "Avoid personal information"
    ]
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));