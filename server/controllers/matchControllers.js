const matchModels = require("../models/matchModels");

require("dotenv").config;
const { scoreBoardId } = process.env;

const updateMatch = async (req, res) => {
    try {
        const { teamOne, teamTwo, teamOneScore, teamTwoScore } = req.body;
        const task = await matchModels.updateOne({ scoreBoardId }, {$set: { teamOne, teamTwo, teamOneScore, teamTwoScore }});
        console.log(task);
        res.status(200).json({ message: "Updated Successfully" });
    }   catch (e) {
        res.status(400).json({message: e.message});
    }
}

const resetMatch = async (req, res) => {
    try {
        const task = await matchModels.updateOne({ scoreBoardId }, {$set: { teamOne: "", teamTwo: "", teamOneScore: "", teamTwoScore: "" }});
        console.log(task);
        res.status(200).json({ message: "Reset Successfully" });
    }   catch (e) {
        res.status(400).json({message: e.message});
    }
}

module.exports = { updateMatch, resetMatch }