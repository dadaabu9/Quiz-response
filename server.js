const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Quiz API is running!");
});


// Middleware
app.use(cors()); // Allow frontend requests
app.use(bodyParser.json()); // Parse JSON data

// Handle Quiz Data Submission
app.post("/submit-quiz", (req, res) => {
    const quizData = req.body; // Get quiz data from frontend

    // Read existing data
    let storedData = [];
    if (fs.existsSync("quizData.json")) {
        storedData = JSON.parse(fs.readFileSync("quizData.json"));
    }

    // Add new quiz data
    storedData.push(quizData);

    // Save to JSON file
    fs.writeFileSync("quizData.json", JSON.stringify(storedData, null, 2));

    res.json({ message: "Quiz data saved successfully!" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
