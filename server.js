const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// dotenv config
dotenv.config();


// Rest object
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//static files access
app.use(express.static(path.join(__dirname, './client/build')))  

//Routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'));

app.get('*', function (req,res) {
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
});

//port
const PORT = process.env.PORT || 3000;
//listen
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})