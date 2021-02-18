const mongoose = require("mongoose");
const validator = require("validator")


const empSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minlength: 3
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3
    },

    dept: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: [true, "Email is not valid"]
    },

    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        max: 10,
        require: true,
    }

})

let empModel = mongoose.model('empData', empSchema)

class EmployeeModel {
    create = (req, res) => {
        try {
            return new Promise((resolve, reject) => {
                empModel.create(req).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })

        } catch (error) {
            next(error);
        }
    }

    getdata = (req, res) => {
        try {
            return new Promise((resolve, reject) => {
                empModel.find().then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })

        } catch (error) {
            next(error);
        }
    }
    updateData(id, newData) {
        return empModel.findByIdAndUpdate(id, newData)
            .then(result => {
                return result;
            })
            .catch(error => {
                return ({ message: "Something Went Wrong Please Check", error: error });
            })
    }

    deleteData(id) {
        return empModel.findByIdAndRemove(id)
            .then(result => {
                return result;
            })
            .catch(error => {
                return ({ message: "Something Went Wrong Please Check", error: error });
            })
    }




}
module.exports = new EmployeeModel();