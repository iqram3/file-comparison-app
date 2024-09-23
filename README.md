
# File Comparison App

This is the App of the File Comparison Application built with **React** and **TypeScript**. It allows users to upload two files and compare them via a backend API.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for managing dependencies.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/iqram3/file-comparison-app
    cd App
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm start
    ```

4. **Access the application**:
    The app will be running on `http://localhost:3000`.

## File Structure

```
App/
│
├── src/
│   ├── components/
|   |   |__ FileUpload.tsx           # handles Form inputs and Client side validations.  
│   │   ├── FileUploadWrapper.tsx    # Handles file upload inputs
│   │   ├── StatusMessage.tsx        # Displays comparison result or error
│   │   └── FileContainer.tsx        # Main logic and API call
│   ├── App.tsx                      # Main app file
│   └── index.tsx                    # Entry point
│
├── public/                          # Public assets
├── package.json                     # Project metadata and dependencies
└── ...                              # Other config files
```

## Features

- Upload two files for comparison.
- Display the result (`Files are identical` or `Files are different`).
- Show errors if files are not uploaded properly.

## Tech Stack

- **React**: App library for building user interfaces.
- **TypeScript**: Type-safe version of JavaScript.
- **TailwindCSS**: Utility-first CSS framework for styling.

---
# File Comparison Backend

This is the backend API for the File Comparison Application. It handles file uploads and compares the contents of the two files uploaded via the frontend.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd server
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the server**:
    ```bash
    node server.js
    ```

4. **Access the API**:
    The server will be running on `http://localhost:4000`.

## File Structure

```
server/
│
├── uploads/           # Temporary storage for uploaded files
├── server.js          # Main backend logic
├── package.json       # Project metadata and dependencies
└── ...                # Other config files
```

## API Endpoints

- **POST `/compare`**:
    - Description: Compares the contents of two uploaded files.
    - Request: 
        - `file1`: First file to compare.
        - `file2`: Second file to compare.
    - Response:
        - 200: `{"result": "Files are identical"}` or `{"result": "Files are different"}`
        - 400: `{"error": "Both files are required"}`

## Tech Stack

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Multer**: Middleware for handling file uploads.

---

## License

This project is licensed under the MIT License.
