let express = require('express');
// Import packages
// const jwt = require('jsonwebtoken');
// var expressjwt = require('express-jwt');
let mongoose = require('mongoose')
const bodyParser = require('body-parser')
let app = express();
mongoose.connect('mongodb://localhost/guestBook');
mongoose.connect('mongodb://localhost/guestBook', { useNewUrlParser: true});

var db = mongoose.connection;

if(!db)
    console.log("Db failed to connect!")
else
    console.log("Db connected successfuly!")
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Guestbook here'));

app.listen(port, () => {
    console.log("Running on port " + port);
});

let apiRoutes = require("./routes");

app.use("/api",apiRoutes);





