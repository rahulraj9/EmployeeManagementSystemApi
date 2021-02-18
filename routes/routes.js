const route = require("express").Router();

const empController =require('../Controller/EmpController')

route.get('/employee/getData', empController.getEmpData)
route.post('/employee/addEmpData', empController.addEmpData) 
route.put("/employee/update/:id", empController.updateData)
route.delete("/employee/delete/:id", empController.deleteData)
route.get("/employee/getById/:id", empController.findById)


module.exports = route