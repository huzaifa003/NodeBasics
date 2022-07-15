const express = require('express')
const path = require('path')
const fs  = require('fs')

const pathEmployee = 'Basics/server/nodeJS_Server_Middleware/data/employee.json'
const data = {
    employees: require('../data/employee.json')
}

function setEmployees(new_emp) {
    data.employees.push({
        id: new_emp.id,
        firstname: new_emp.firstname,
        lastname: new_emp.lastname
    })

    fs.writeFileSync(pathEmployee,JSON.stringify(data.employees))

    console.log(data.employees)

} 
const getAllEmployees = (req, res) => {
    res.json(data.employees)
}
const addEmployee = (req, res) => {

    console.log(data.employees[data.employees.length - 1].id)
    const newEmployee = {
        id: data.employees[data.employees.length - 1].id + 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }

    setEmployees(newEmployee)
    
    res.json(data.employees)
}

const updateEmployee = (req, res) => {
    res.json({
        "firstname": req.body.firstname,
        "lastname": req.body.lastname
    })
}

const deleteEmployee = (req, res) => {
    res.json({ "id": req.body.id })
}

const getEmployee = (req, res) => {
    res.json({ "id": req.params.id })
}

module.exports = {
    getAllEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}