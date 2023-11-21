const express = require('express');
const { updateMatch, resetMatch } = require('../controllers/matchControllers');
const routers = express.Router();

routers.put('/', updateMatch);
routers.put('/reset', resetMatch);

module.exports = ("matchRouters", routers);