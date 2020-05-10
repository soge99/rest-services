var express = require("express");
var router = express.Router();
var {response_validar_rut} = require('../services/rut');
var {responseNombreSexo} =require('../services/nombre');

router.post('/rut',response_validar_rut);
router.post('/nombre',responseNombreSexo);


module.exports = router;