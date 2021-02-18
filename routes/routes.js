const route = require("express").Router();

const empController =require('../Controller/EmpController')

route.get('/Employee/getData', empController.getEmpData)
route.post('/Employee/addEmpData', empController.addEmpData) 
route.put("/Employee/update/:id", empController.updateData)
route.delete("/Employee/delete/:id", empController.deleteData)
module.exports = route