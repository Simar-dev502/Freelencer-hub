const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB =
  require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
"/api/applications",
require("./routes/applicationRoutes")
);
app.use(
"/api/jobs",
require("./routes/jobRoutes")
);
app.use(
"/api/auth",
require("./routes/authRoutes")
);
app.use(
"/api/reviews",
require("./routes/reviewRoutes")
);
app.use(
"/api/portfolio",
require("./routes/portfolioRoutes")
);
app.use(
"/api/saved-jobs",
require(
"./routes/savedJobRoutes"
)
);
app.use(
"/api/payments",
require(
"./routes/paymentRoutes"
)
);

app.use(
"/api/hire",
require(
"./routes/hireRoutes"
)
);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT =
  process.env.PORT || 5000;

const http =
require("http");

const {
Server
}
=
require("socket.io");

const server =
http.createServer(app);

const io =
new Server(
server,
{
cors:{
origin:"http://localhost:5173"
}
}
);

io.on(
"connection",
(socket)=>{

console.log(
"User Connected"
);

socket.on(
"sendMessage",
(data)=>{

io.emit(
"receiveMessage",
data
);

});

socket.on(
"disconnect",
()=>{

console.log(
"User Disconnected"
);

});

}
);

server.listen(
PORT,
()=>{
console.log(
`Server running on ${PORT}`
);
}
);