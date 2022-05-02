const Geo2Ip = require("../../utils/Geo2Ip").default;
const express = require('express');
const router = express.Router();

/**
 * Get ip details
 * 
 * @param {String} ip
 * 
 * @returns {Promise}
 */
router.get('/:ip', async (req, res) => {
    let ip = req.params.ip;
    try {
        let ipDetails = await Geo2Ip.getIpDetails(ip);
        res.status(200).json(ipDetails);
    } catch (err) {
        res.sendStatus(500);
    }
});

/**
 * Get ip details
 * 
 * @param {Array} ip
 * 
 * @returns {Array}
 */
router.post('/', async (req, res) => {
    let ip = req.body.ip;
    try {
        let ipDetails = await Geo2Ip.getIpDetails(ip);
        res.status(200).json(ipDetails);
    } catch (err) {
        res.sendStatus(500);
    }
});


module.exports = router;