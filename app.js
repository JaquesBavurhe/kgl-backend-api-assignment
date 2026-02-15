const express = require("express");
const userRoutes = require("./routes/authRoutes");
const procurementRoutes = require("./routes/procurementRoutes");
const salesRoutes = require("./routes/salesRoutes");
const mongoose = require("mongoose");


require("dotenv").config();

const URI = process.env.MONGODB_URI;

mongoose.connect(URI);
mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open!!");
  })
  .on("error", (error) => {
    console.error(`Connection error:${error.message}`);
  });



const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/procurement", procurementRoutes);
app.use("/sales", salesRoutes);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
