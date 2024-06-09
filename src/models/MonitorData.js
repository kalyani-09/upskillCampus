const mongoose = require('mongoose');

const MonitorDataSchema = new mongoose.Schema({
    pestPresence: {
        type: String,
        required: true
    },
    diseaseSymptoms: {
        type: String,
        required: true
    },
    environmentalConditions: {
        temperature: Number,
        humidity: Number,
        rainfall: Number,
        windSpeed: Number
    },
    cropHealth: {
        chlorophyllContent: Number,
        leafColor: String,
        growthPatterns: String
    },
    biologicalControlAgents: {
        type: String,
        required: true
    },
    chemicalResidues: {
        pesticideLevel: Number,
        compliance: Boolean
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('MonitorData', MonitorDataSchema);
