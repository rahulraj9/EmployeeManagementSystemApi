const empModel = require('../model/EmpModel');

class EmployeeService {

    addDataService = (req, next) => {
        try {
            return empModel.create(req).then((result => {
                return ({
                    message: "Record added sucessfully!",
                    data: result
                });
            })).catch((error) => {
                return ({
                    message: "failed to create record!",
                    data: error
                });
            })
        } catch (error) {
            next(error)
        }
    }


    getDataService = (req, next) => {
        try {
            return empModel.getdata(req).then((result => {
                return ({
                    message: "Record found!",
                    data: result
                });
            })).catch((error) => {
                return ({
                    message: "failed to getting record!",
                    data:error
                });
            })
        } catch (error) {
            next(error)
        }
    }

    updateData(id, newData,next){
        try {
            return empModel.updateData(id, newData)
            .then((result) =>{
                return ({ message: "Employee Record Update Successfully", data: result });
            })
            .catch((error)=> {
                return ({ message: "Employee Record is Not found", error: error });
            })
        } catch (error) {
          next(error)
        }
    }


    deleteData(id){
        try {
            return empModel.deleteData(id)
            .then((result) =>{
                return ({ message: "Employee Record Deleted Successfully", data: result });
            })
            .catch((error)=> {
                return ({ message: "Employee Record is Not found", error: error });
            })
        } catch (error) {
            console.error("Employee Record is Not found Please Enter Correct One");
        }
    }


}

module.exports = new EmployeeService();