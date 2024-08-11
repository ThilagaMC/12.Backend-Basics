# File Management API

This project is a simple Node.js application using Express to manage text files. It provides two endpoints: one for creating a text file with a timestamp and another for listing all text files in a directory.

## Project Structure

- **index.js**: Main server file with API endpoints.
- **fs.js**: File system utilities for creating and reading files.
- **textFiles/**: Directory where text files are stored.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install Dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) installed. Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. **Start the Server:**

   Run the server using:

   ```bash
   npm start
   ```

   The server will start and listen on port 5000 by default.

2. **Create a File:**

   Send a `GET` request to `http://localhost:5000/create-file` to create a text file with the current timestamp in the `textFiles` directory.

   ```bash
   curl http://localhost:5000/create-file
   ```

   Response:
   ```json
   {
     "message": "File created successfully!"
   }
   ```

3. **List Files:**

   Send a `GET` request to `http://localhost:5000/read-files` to list all text files in the `textFiles` directory.

   ```bash
   curl http://localhost:5000/read-files
   ```

   Response:
   ```json
   {
     "files": [
       "2024-08-10T12-34-56.789Z.txt",
       "2024-08-10T12-35-00.123Z.txt"
     ]
   }
   ```

## Files and Directory

- **`textFiles/`**: Directory where text files are saved. Each file is named with the current timestamp to ensure uniqueness.

## Error Handling

- If there’s an error creating a file, the API will respond with a 500 status code and an error message.
- If there’s an error reading the directory, the API will respond with a 500 status code and an error message.

## Development

To modify or extend this project, update the `fs.js` for file system operations and `index.js` for API endpoints.

## Dependencies

- **Express**: Web framework for Node.js.

   ```json
   "dependencies": {
     "express": "^4.19.2"
   }
   ```
