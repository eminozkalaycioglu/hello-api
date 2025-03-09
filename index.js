const express = require("express");
const app = express();

app.get("/get-time", (req, res) => {
    const now = new Date();
    res.json({
        time: now.toISOString()
    });
});

app.get("/ci-test", (req, res) => {
    const now = new Date();
    res.json({
        time: now.toISOString()
    });
});

const tabooCards = [
    {
      mainWord: "Güneş",
      forbiddenWords: ["Işık", "Sıcak", "Gündüz", "Yaz", "Gökyüzü"]
    },
    {
      mainWord: "Bilgisayar",
      forbiddenWords: ["Klavye", "Ekran", "İnternet", "Mouse", "Teknoloji"]
    },
    {
      mainWord: "Deniz",
      forbiddenWords: ["Su", "Kum", "Yüzmek", "Mavi", "Gemi"]
    }
  ];
  
  app.get("/taboo-cards", (req, res) => {
    res.json(tabooCards);
  });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
