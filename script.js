// const path = require("path");
// const fs = require("fs");

//console.log(path.basename(__filename));

// fs.mkdir(path.join(__dirname, "/api"), {}, (error) => {
//     if (error) {
//         throw error;
//     }
// });

// fs.writeFile(path.join(__dirname, "/api", "api.txt"), "User name : Habeeb", (error) => {
//     if (error) {
//         throw error;
//     }
// });







//---------------------Api-----------------------//

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         fs.readFile(path.join(__dirname, "views", "index.html"), "utf8", (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);
//         });
//     }

//     if (req.url === "/contact") {
//         fs.readFile(path.join(__dirname, "views", "contact.html"), "utf8", (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);
//         });
//     }



// });

// const PORT = process.env.PORT || 3001;

// server.listen(PORT, () => console.log(`Server running on ${PORT}`));








//-------------------------------Node js Express----------------------------//


// const logger = require("./utils");


// console.log(logger.myName);
// console.log(logger.logger());


// const express = require("express");
// const app = express();

// app.get("/profile", Token, Validation, (req, res) => {
//     console.log("User Logged");
//     res.send("<h1>Success<h1>");
// });

// function Token(req, res, next) {
//     console.log("Creating Token");
//     req.token = true;
//     next();
// }

// function Validation(req, res, next) {
//     if (req.token) {
//         console.log("Token Approved");
//         next();
//         return;
//     }

//     console.log("No Token");
//     res.send("<h1>Failed</h1>");

// }



// const PORT = process.env.PORT || 3001;

// app.listen(PORT);





//------------------------------Login Form--------------------------------//

const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const PORT = process.env.PORT || 3000;

app.listen(PORT);

app.get("/", (req, res) => {
    const jsonObject = {
        "status": "Running"
    };

    res.send("Working");
});



app.get("/profile", (req, res) => {

    const filePath = path.join(__dirname, "views", "index.html");

    res.sendFile(filePath);
});



const userData = [
    { id: 1, name: "habeebu", company: "google" },
    { id: 2, name: "rahman", company: "meta" },
    { id: 3, name: "kt", company: "apple" },
];

app.get("/user", (req, res) => {

    res.json(userData);
});


app.post("/user/:id", (req, res) => {

    const userId = parseInt(req.params.id);

    const filteredData = userData.filter((data) => data.id === userId);

    res.json(filteredData);
});



const emailDb = "habeeb@gmail.com";
const passwordDb = "123";

app.post('/login', (req, res) => {
    const { email, password } = req.body; 

    if (email == emailDb && password == passwordDb) {
        res.json(req.body);
    } else {
        res.send("Login failed");
    }

});



app.get("*", (req, res) => {
    res.send("No route available");
})