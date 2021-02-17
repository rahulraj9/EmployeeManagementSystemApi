const route = require("express").Router();

const empController =require('../Controller/EmpController')

route.get('/getData', empController.getEmpData)
route.post('/addData', empController.addEmpData)
module.exports = route