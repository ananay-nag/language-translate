const express = require('express');
const MORGAN = require("morgan");
const { urlencoded, json } = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const router = require("./app/router/index")



/**
 * Config Express
 */
const app = express();
app.use(MORGAN(":method :url :status  - :response-time ms"));
// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));
// parse application/json
app.use(json());
app.use(helmet());
app.use(cors());
 
const PORT = process.env.PORT || 3000;

//router
app.use("/",router)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
