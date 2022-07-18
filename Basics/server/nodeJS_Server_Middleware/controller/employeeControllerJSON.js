const path = require('path')
const fs = require('fs')


// FOR JSON FILE 
const pathEmployee = path.join(__dirname, '..', 'data', 'employee.json') 
const data = {
    employees: require('../data/employee.json')
}


// function getEmployeeById(id)
// {
//     for (let i = 0; i < data.employees.length; i++) {
//         const employee = data.employees[i];
//         if (employee.id == id)
//         {
//             return employee
//         }
//     }
//     return {id : 0, firstname: '', lastname: ''}
// }


function setEmployees(new_emp) {
    data.employees.push({
        id: new_emp.id,
        firstname: new_emp.firstname,
        lastname: new_emp.lastname
    })
    console.log(data.employees)
}

const writeFileEmployee = (req, res) => {
    fs.writeFileSync(pathEmployee, JSON.stringify(data.employees))
    res.status(200).send("File Successfilly Wrriten")
}

const getAllEmployees = (req, res) => {
    res.json(data.employees)
}
const addEmployee = (req, res) => {

    tempId = 1
    if (data.employees.length == 0)
    {
        tempId = 1
    }
    else
    {
        tempId = data.employees[data.employees.length - 1].id + 1
    }
    const newEmployee = {
        id: tempId,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }

    setEmployees(newEmployee)

    res.json(data.employees)
}

const updateEmployee = (req, res) => {
    const updateEmployee = {
        id: parseInt(req.body.id),
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    for (let i = 0; i < data.employees.length; i++) {
        const employee = data.employees[i];
        if (updateEmployee.id == employee.id)
        {
            data.employees[i].firstname = updateEmployee.firstname
            data.employees[i].lastname = updateEmployee.lastname
            return res.status(200).json(data.employees)
        }
        
    }
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
    writeFileEmployee
}