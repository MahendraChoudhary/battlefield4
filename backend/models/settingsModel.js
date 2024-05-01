const {Schema, model} = require('mongoose');

const settingsSchema = new Schema({
    region: {
        type: String
    },
    punkbuster: {
        type: String
    },
    fairfight: {
        type: String
    },
    password: {
        type: String
    },
    preset: {
        type: String
    }
})

const SettingsModel = model('settings', settingsSchema);

module.exports = SettingsModel;