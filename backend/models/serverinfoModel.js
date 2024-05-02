const {Schema, model} = require('mongoose');

const serverinfoSchema = new Schema({
    playersn: {
        type: Number
    },
    playersd: {
        type: Number
    },
    ping: {
        type: Number
    },
    tickrate: {
        type: Number
    },
    settings: {
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
    }, 
    advanced: {
        minimap: {
            type: String
        },
        onlysquadleaderspawn: {
            type: String
        },
        vehicles: {
            type: String
        },
        teambalance: {
            type: String
        },
        minimap_spotting: {
            type: String
        },
        hud: {
            type: String
        },
        vehiclecam: {
            type: String
        },
        regenerativehealth: {
            type: String
        },
        killcam: {
            type: String
        },
        friendlyfire: {
            type: String
        },
        spotting: {
            type: String
        },
        enemynametags: {
            type: String
        }
    },
    rules: {
        tickets: {
            type: Number
        },
        vehiclespawndelay: {
            type: Number
        },
        bulletdamage: {
            type: Number
        },
        kickafterteamkills: {
            type: Number
        },
        playerhealth: {
            type: Number
        },
        playerrespawntime: {
            type: Number
        },
        kickafteridle: {
            type: Number
        },
        banafterkicks: {
            type: Number
        }
    }
})

const ServerInfoModel = model('serverinfo', serverinfoSchema);
module.exports = ServerInfoModel;