const {Schema, model} = require('mongoose');

const advancedSchema = new Schema({
    minimap: {
        type: String
    },
    osls: {
        type: String
    },
    vehicles: {
        type: String
    },
    team_balance: {
        type: String
    },
    minimap_spotting: {
        type: String
    },
    hud: {
        type: String
    },
    vehicle_cam: {
        type: String
    },
    regenerative_health: {
        type: String
    },
    kill_cam: {
        type: String
    },
    friendly_fire: {
        type: String
    },
    spotting: {
        type: String
    },
    enemy_name_tags: {
        type: String
    }
})

const AdvancedModel = model('advanced', advancedSchema);

module.exports = AdvancedModel;