const route = require("express").Router();

const empController =require('../Controller/EmpController')
route.get("/Employee", (req, res) => {
    res.send("Hello From the Other Side");

})

route.post('/addData', empController.addEmpData)
module.exports = route