const express = require("express");
const cors = require("cors"); // Import the cors package
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Set up Multer to handle file uploads
const upload = multer({ dest: "uploads/" });

// Compare file content function
const compareFiles = (file1Path, file2Path) => {
  const file1Content = fs.readFileSync(file1Path, "utf8");
  const file2Content = fs.readFileSync(file2Path, "utf8");
  return file1Content === file2Content;
};

// File comparison route
app.post(
  "/compare",
  upload.fields([{ name: "file1" }, { name: "file2" }]),
  (req, res) => {
    const file1 = req.files["file1"][0];
    const file2 = req.files["file2"][0];

    if (!file1 || !file2) {
      return res.status(400).json({ error: "Both files are required" });
    }

    const areFilesEqual = compareFiles(file1.path, file2.path);

    // Clean up files
    fs.unlinkSync(file1.path);
    fs.unlinkSync(file2.path);

    if (areFilesEqual) {
      return res.json({ difference: "Files are identical" });
    } else {
      return res.json({ difference: "Files are different" });
    }
  }
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
