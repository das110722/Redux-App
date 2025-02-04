const express = require('express');
const app = express();
app.use(express.json());

// Enable CORS
const cors = require('cors');
app.use(cors());

app.post("/v1/update", (req, res) => {
    setTimeout(() => {
        res.status(200).json(req.body);
    }, [2000]);
})

app.listen(9000, () => console.log("Server started on port 9000"));