// Write your solution in this file!
const employee = {
    name:'Kelvin Acosta',
    streetAddress: '1010605 sw'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    
    //const employees = { ...employee,[key]:value}
    const employees = { ...employee };
    employees[key] = value;
    return employees;
    
    
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    //employee[key] = value;
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const employees = {...employee};
    delete employees[key];
    return employees;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}

