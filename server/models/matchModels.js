const { default: mongoose, Schema } = require("mongoose");

const matchModels = new Schema (
    {
        scoreBoardId: {
            type: String,
            require: true
        },
        teamOne: {
            type: String,
            require: true
        },
        teamTwo: {
            type: String,
            require: true
        },
        teamOneScore: {
            type: Number,
            require: true
        },
        teamTwoScore: {
            type: Number,
            require: true
        }
    }, { timestamps: true }
);

module.exports = mongoose.model("matchModels", matchModels, 'Matches');