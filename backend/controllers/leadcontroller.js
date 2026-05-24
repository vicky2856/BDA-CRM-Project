const Lead = require("../models/Leads");
exports.createLead = async (req, res) => {
    try {
        const lead = await Lead.create(req.body);
        res.status(201).json(lead);
    }
    catch (error) {
        res.status(500).json(error);
    }
},
    exports.getLeads = async (req, res) => {
        try {
            const leads = await Lead.find();
            res.json(leads);
        }
        catch (error) {
            res.status(500).json(error);
        }
    };
exports.updateLead = async (req, res) => {
    try {

        const updatedLead = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedLead);

    } catch (error) {
        res.status(500).json(error);
    }
};
exports.deleteLead = async (req, res) => {
    try {
        await Lead.findByIdAndDelete(req.params.id);
        res.json({ message: "Lead deleted successfully" });
    }
    catch (error) {
        res.status(500).json(error);
    }
};