const mongoose = require("mongoose");
const leadSchema = new mongoose.Schema({
    clientName: {
        type: String,
        reuired: true
    },
    companyName: {
        type: String,
        reuired: true
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },

    status: {
        type: String,
        default: "New Lead"
    },
    priority: {
        type: String,
        default: "Medium"
    },
    assignedTo: {
        type: String
    },
    followUpDate: {
        type: String
    },
    notes: {
        type: String
    }
}, { timestamps: true });
module.exports = mongoose.model("Lead", leadSchema);