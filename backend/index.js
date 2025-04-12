const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;  // You can change this to any available port

// Middleware
app.use(cors());  // Allows cross-origin requests from your React frontend
app.use(express.json());  // To parse JSON bodies

// Sample API route
app.get('/api/healthz', (req, res) => {
  res.json({ message: 'Hello 👋, i am running 🚀 🚀 🚀' });
});

app.get('/api/get-code', (req, res) => {
   let  { fileName } = req.query;  
   fileName = `${fileName}.js`
    if (!fileName) {
      return res.status(400).json({ error: 'File name is required' });
    }
  
    const filePath = path.join(__dirname, '..', 'client', 'src', 'components', fileName);  // Construct the full path to the file
    console.log("filename is ", fileName, filePath)
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.log(" error code data is ", err);
        res.status(500).json({ error: `Error reading file: ${err.message}` });
        return;
      }
      console.log("code data is ", data);
      res.json({ code: data });
    });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
