const express = require("express");
const app = express();

app.get("/time", (req, res) => {
    const now = new Date();
    res.json({
        time: now.toISOString()
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
