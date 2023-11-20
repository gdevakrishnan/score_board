const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const userRouters = require('./routers/userRouters');

require('dotenv').config();
const { PORT, MONGO_URI } = process.env;


// Json and Cors (http and header handlers)
app.use(express.json({extended: false}));
app.use(cors({origin: true, Credential: true}));

// Database and server listening
mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`The Database was Connected Successfully\nThe Server was Listening\nhttp://localhost:${PORT}`);
        });
    })
    .catch((e) => console.log(e.message));

// Routers
app.use('/score_board', userRouters);