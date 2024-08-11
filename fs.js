import fs from 'fs';
import path from 'path';

// Folder where the text files will be saved
const folderPath = path.join(process.cwd(), 'textFiles');

// Ensure the folder exists
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

const createFile = () => {
    try {
        // Generate a filename based on the current timestamp
        const now = new Date();
        const fileName = `${now.toISOString().replace(/:/g, '-')}.txt`;
        const filePath = path.join(folderPath, fileName);

        // Write the timestamp to the file
        fs.writeFileSync(filePath, now.toISOString(), { flag: 'w' });
        console.log('File created successfully.');
    } catch (err) {
        console.error(`Error creating file: ${err}`);
    }
};


const readFile = () => {
    try {
        const files = fs.readdirSync(folderPath);
        return files;
    } catch (err) {
        console.error(`Error reading files: ${err}`);
        return [];
    }
};

export { createFile, readFile };
