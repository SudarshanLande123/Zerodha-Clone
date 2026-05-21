require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth.routes");
const auth = require("./middleware/auth.middleware");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URI;

mongoose.connect(MONGO_URL)
.then(()=> console.log("MongoDb Connected!"))
.catch((err)=> console.log("error--->",err));

const holdingsRoutes = require("./routes/holdings.routes");
const positionsRoutes = require("./routes/positions.routes");
const ordersRoutes = require("./routes/orders.routes");


//Route
app.use("/auth",authRoutes);

app.use("/allHoldings",auth,holdingsRoutes);
app.use("/allPositions",auth,positionsRoutes);
app.use("/allOrders",auth,ordersRoutes);



app.listen(PORT,()=>{
    console.log("Server is Running");
})