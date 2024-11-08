const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { readdirSync } = require('fs');

require('dotenv').config();
const app = express();

// db connection 
mongoose.connect(process.env.DATABASE).then(()=>{console.log('db connected')}).catch((error)=>{console.log(`db error: ${error}`)})

// middlewares
app.use(express.json({limit: "1mb"}));
app.use(express.urlencoded({extended:true}));
app.use(cors({origin: [process.env.CORSORIGIN, process.env.CORSORIGIN_DOMAIN]}));

// autoload routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
// listening on port
const port = process.env.PORT || 8000;
app.listen(port, ()=> {
    console.log(`served on port ${port}`);
})