const MonitorData = require('../models/MonitorData');

exports.createMonitorData = async (req, res) => {
    try {
        const monitorData = new MonitorData(req.body);
        await monitorData.save();
        res.status(201).send(monitorData);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllMonitorData = async (req, res) => {
    try {
        const data = await MonitorData.find({});
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};
