const express = require('express');
const app = express();
app.use(express.json());

app.post("/v1/update", (req, res) => {
    setTimeout(() => {
        res.json({ status: "success" });
    }, 5000);
})

app.listen(9000, () => console.log("Server started on port 9000"));