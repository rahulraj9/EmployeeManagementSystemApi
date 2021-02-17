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


}

module.exports = new EmployeeController();