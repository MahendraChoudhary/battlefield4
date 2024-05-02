const serverinfo = require('../models/serverinfoModel');
const data = require('../data');

const postServerData = async(req, res, next) => {
    try{
        const data = req.body;
        // await serverinfo.remove();
        const serverdata = await serverinfo.create(data);
        res.json(serverdata);
    }catch(err){
        console.log(err);
        res.json({ message: "Could not add data to DB"});
    }
    // res.json({message: "Hii"});
}

const getServerData = async(req, res, next) => {
    try{
        serverdata = await serverinfo.findOne();
        res.json(serverdata);
    }catch(err){
        console.log(err);
        res.json({message: "No data found"});
    }
}

module.exports = {postServerData, getServerData};

