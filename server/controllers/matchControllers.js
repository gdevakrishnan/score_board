const matchModels = require("../models/matchModels");

require("dotenv").config;
// UNIQUE SCORE BOARD ID TO MAKE CRUD OPERATIONS
const { scoreBoardId } = process.env;

// TO UPDATE THE SCORE BOARD
const updateMatch = async (req, res) => {
    try {
        const { teamOne, teamTwo, teamOneScore, teamTwoScore } = req.body;
        const task = await matchModels.updateOne({ scoreBoardId }, {$set: { teamOne, teamTwo, teamOneScore, teamTwoScore }});
        res.status(200).json({ message: "Updated Successfully" });
    }   catch (e) {
        res.status(400).json({message: e.message});
    }
}

// TO RESET MATCH
const resetMatch = async (req, res) => {
    try {
        const task = await matchModels.updateOne({ scoreBoardId }, {$set: { teamOne: "", teamTwo: "", teamOneScore: 0, teamTwoScore: 0 }});
        res.status(200).json({ message: "Reset Successfully" });
    }   catch (e) {
        res.status(400).json({message: e.message});
    }
}

// TO GET MATCH DETAILS THIS API FOR ESP8266
const getMatchDetails = async (req, res) => {
    try {
        const task = await matchModels.findOne({ scoreBoardId });
        res.status(200).json({message: "Match Details", task});        
    }   catch (e) {
        res.status(400).json({message: e.message});
    }
}

module.exports = { getMatchDetails, updateMatch, resetMatch }