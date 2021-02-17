const empModel = require('../model/EmpModel');

class EmployeeService {

    addDataService = (req, next) => {
        try {
            return empModel.create(req).then((result => {
                return ({
                    meassage: "Record added sucessfully!",
                    data: result
                });
            })).catch((error) => {
                return ({
                    meassage: "failed to create record!",
                    data: result
                });
            })
        } catch (error) {
            next(error)
        }

    }
}

module.exports = new EmployeeService();