const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", (_, response) => {
        response.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}

module.exports = app.listen(PORT, () => {
    console.log(`Server 🚀  http://localhost:${PORT}/`);
});
