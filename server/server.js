const express = require('express');
const studentRoutes = require('./src/student/routes');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));