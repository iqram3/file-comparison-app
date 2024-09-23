
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
