const express = require('express');
const router = express.Router();
const {getServerData, postServerData} = require('../controllers/dataController');

router.post('/postServerData', postServerData);
router.get('/getServerData', getServerData);

module.exports = router;