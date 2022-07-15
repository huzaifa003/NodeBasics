const express = require('express')
const path = require('path')
const router = express.Router()

const controllerEmployee = require('../../controller/employeeController')

router.route('/')
    .get(controllerEmployee.getAllEmployees)
    .post(controllerEmployee.addEmployee)
    .put(controllerEmployee.updateEmployee)
    .delete (controllerEmployee.deleteEmployee)

router.route('/:id')
    .get(controllerEmployee.getEmployee)
module.exports = router