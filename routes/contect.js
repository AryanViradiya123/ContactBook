var express = require('express');

var router = express.Router();
const contectController = require('../controllers/contect')
const GetController = require('../controllers/contect')
const UpdateController = require('../controllers/contect')
const DeleteController = require('../controllers/contect')


router.post('/contect/create', contectController.contectCreate);
router.get('/contect/find', GetController.contectFind);
router.patch('/contect/update', UpdateController.contectUpdate);
router.delete('/contect/delete', DeleteController.contectDelete);

module.exports = router;