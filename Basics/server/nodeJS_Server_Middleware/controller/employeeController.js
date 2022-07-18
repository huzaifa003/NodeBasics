const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')


// // FOR JSON FILE 
// const pathEmployee = path.join(__dirname, '..', 'data', 'employee.json') 
// const data = {
//     employees: require('../data/employee.json')
// }
//-------------WE HAVE ALREADY CONNECTED TO DB in the Start------------------------------------\\


//FOR Database CompanyDB with collection of employees
const employees = require('../data/Employee')



async function setEmployees(new_emp) {
    const result = await employees.create({
        "firstname": new_emp.firstname,
        "lastname": new_emp.lastname
    })
    console.log(result)
}


const getAllEmployees = async (req, res) => {
    const data = await employees.find({})
    res.json(data)
}
const addEmployee = async (req, res) => {

   
    const newEmployee = {
        // id: tempId,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }

    setEmployees(newEmployee)

    const data = await employees.find({})
    res.json(data)
}

const updateEmployee = async (req, res) => {
    const updateEmployee = {
        // id: parseInt(req.body.id),
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }

    const result = await employees.findByIdAndUpdate(req.body.id,({
        "firstname": updateEmployee.firstname,
        "lastname": updateEmployee.lastname,
    }))
   
    if (result){
        const data = await employees.find({})
        return res.status(200).json(result)
    }
    
    // for (let i = 0; i < data.employees.length; i++) {
    //     const employee = data.employees[i];
    //     if (updateEmployee.id == employee.id)
    //     {
    //         data.employees[i].firstname = updateEmployee.firstname
    //         data.employees[i].lastname = updateEmployee.lastname
    //         return res.status(200).json(data.employees)
    //     }
        
    // }
    return res.status(401).send("Does not exist already")
    
}

const deleteEmployee = (req, res) => {
    id = parseInt(req.body.id)
    for (let i = 0; i < data.employees.length; i++) {
        const employee = data.employees[i];
        if (id == employee.id)
        {
            data.employees.splice(i,1)
            return res.status(200).json(data.employees)
        }
        
    }
    return res.status(401).send("Does not exist already")
}

const getEmployee = (req, res) => {
    id = parseInt(req.params.id)
    for (let i = 0; i < data.employees.length; i++) {
        const employee = data.employees[i];
        if (id == employee.id)
        {
            return res.status(200).json(employee)
        }
        
    }
    return res.status(401).json("Does not exist already")
}

module.exports = {
    getAllEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee,
}