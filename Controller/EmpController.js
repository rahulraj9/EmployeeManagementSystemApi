const empService = require('../service/EmpService');

const response = {};

class EmployeeController {
    addEmpData = (req, res, next) => {
        try {
            console.log(req.body);
            empService.addDataService(req.body).then((result) =>{
            
                response.sucess = true;
                response.message = result.message;
                response.data = result.data;

                return res.status(200).send(response)
            }).catch((error) => {
                response.sucess = false;
                response.nessage = error.message;
                response.data = error.error;
                return res.status(400).send(response);
            })

        } catch (error) {
            next(error);
        }
    }

    getEmpData = (req, res, next) => {
        try {
            empService.getDataService(req.body).then((result) =>{
            
                response.sucess = true;
                response.message = result.message;
                response.data = result.data;

                return res.status(200).send(response)
            }).catch((error) => {
                response.sucess = false;
                response.nessage = error.message;
                response.data = error.error;
                return res.status(400).send(response);
            })

        } catch (error) {
            next(error);
        }
    }


    updateData(req, res,next) {
        try {
            let newData = req.body.update;
            let empid = req.params.id;
            empService.updateData(empid, newData).then((result) => {
                    response.success = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });

        } catch (error) {
            next(error)
        }
    }
    deleteData(req, res) {
        try {
            let empid = req.params.id;
            empService.deleteData(empid)
                .then((result) => {
                    response.success = true;
                    response.data = result.data;
                    response.message = result.message;
                    res.status(200).send(response);
                }).catch((err) => {
                    response.success = false;
                    response.data = err.message;
                    res.status(400).send(response);
                });
        } catch (error) {
            console.error("Employee Record is Not found Please Enter Correct One");
        }
    }
}

module.exports = new EmployeeController();