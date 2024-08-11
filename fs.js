import fs from 'fs';
import path from 'path';

// Folder where the text files will be saved
const folderPath = path.join(process.cwd(), 'textFiles');


const createFile = () => {
    try {

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        fs.writeFileSync(`./textFiles/${Date().toString()}`, `${Date.now()}`);
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
