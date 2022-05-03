const express = require("express");

require("dotenv").config();

const app = express();

app.use(express.static("public"))

// Build the server here
app.get("/", (request, response) =>
  response.sendFile(__dirname + "/views/htmls/index.html")
);

app.get("/about", (req, res) => 
    res.sendFile(__dirname + "/views/htmls/about.html")
);

app.get('/works', (req, res) => 
res.sendFile(__dirname + "/views/htmls/works.html")
)
app.get ('/photo-gallery', (req, res) => 
res.sendFile(__dirname + "/views/htmls/gallery.html")
)


app.get("*", function (req, res) {
    res.send("Sorry, page not found...Blame our developer", 404);
  });

const PORT = 3000;
app.listen(PORT, () => console.log('running on port 3000'));