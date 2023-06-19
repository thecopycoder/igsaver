const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const  snapsave  = require("snapsave-downloader")

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    return res.render("index");
});


app.get("/download", async function (req, res) {

    const links = await snapsave(req.query.url);

    console.log(links.data[0].url);

    res.render("download", { url: links.data[0].url, video: req.query.url });
});

app.get("/ads.txt", (req, res) => {
    return res.sendFile("/ads.txt")
});

app.get("/robots.txt", (req, res) => {
    return res.sendFile("/robots.txt")
});

app.get("/sitemap.xml", (req, res) => {
    return res.sendFile("/sitemap.xml")
});


app.listen(port, function () {
    console.log("Server is running ");
});




