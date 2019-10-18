const 
  express = require("express"),
  path =require("path");


const app = express();
const PORT = 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservedTable = [
  {
    name: 'jeremy',
    phone: 51256789,
    email: "t@t.com",
    id: 123
  }
];



const waitingTable = [
  {
    name: 'jeremy',
    phone: 51256789,
    email: "t@t.com",
    id: 123
  }
];







app.route("/")
.get(function(req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"))
})


app.route("/reservation")
.get(function(req, res) {
  res.sendFile(path.join(__dirname, "views/reservation.html"))
})

app.route("/waitinglist")
.get (function(req, res) {
  res.sendFile(path.join(__dirname, "views/waitingList.html"))
})

app.route("/api/reservation")
.get(function(req, res) {
  return res.json(reservedTable);
})
.post(function(req, res) {

  reservedTable.push(req.body);
  

})

app.route("/api/waitinglist")
.get (function(req, res) {
    return res.json(waitingTable);

})





app.listen(PORT, function() {
  console.log("App listening on PORT http://localhost:" + PORT);
});