const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Sample API route
app.get('/api/v1/healthz', (req, res) => {
    res.json({ message: 'Hello , i am running ...' });
});


app.get('/api/v1/get-code', (req, res) => {
    console.log("queryyyy  ---- ", req.query)
    let fileName = req.query.filename;
    let folderName = req.query.foldername;
    fileName = `${fileName}.jsx`
    if (!fileName) {
        return res.status(400).json({ error: 'File name is required' });
    }
    console.log("filename is ", fileName)

    const filePath = path.join(__dirname, '..', 'frontend', 'src', 'components', folderName, fileName);  // Construct the full path to the file
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

const port = process.env.PORT || 8000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});