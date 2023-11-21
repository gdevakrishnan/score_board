const express = require('express');
const { getMatchDetails, updateMatch, resetMatch } = require('../controllers/matchControllers');
const routers = express.Router();

routers.get('/', getMatchDetails);
routers.put('/update', updateMatch);
routers.put('/reset', resetMatch);

module.exports = ("matchRouters", routers);