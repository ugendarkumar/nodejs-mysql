const express = require('express');
const controller = require('../controllers/main.controller');
const router = express.Router();



router.get('/root', (req, res) => {
    return res.send(`Hello world`);
});

router.get('/createTable', (req, res) => {
    controller.createTable(req, res);
});

router.get('/updatePrimaryKey', (req, res) => {
    controller.updatePrimarykey(req, res);
});

router.get('/saveInTable', (req, res) => {
    controller.saveInTable(req, res);
});

router.get('/saveMultipleInTable', (req, res) => {
    controller.saveMultipleInTable(req, res);
});


router.get('/selectData', (req, res) => {
    controller.selectData(req, res);
});


router.get('/wildcards', (req, res) => {
    controller.wildcards(req, res);
});

router.get('/evalQuery', (req, res) => {
    controller.evalQuery(req, res);
});

router.get('/orderQuery', (req, res) => {
    controller.orderQuery(req, res);
});

module.exports = [router];