const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }
    console.log("The server is running on port", PORT);
});