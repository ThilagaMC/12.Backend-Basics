import express from 'express';
import { createFile, readFile } from './fs.js';

const app = express();

app.get('/create-file', (req, res) => {
    createFile();
    res.send('File created successfully!');
});

app.get('/read-files', (req, res) => {
    const files = readFile();
    res.json({ files });
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});
