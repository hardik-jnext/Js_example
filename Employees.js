const employeesDetail = [
    { firstName: "hardik", lastName: "sheladiya", email: "hardik.jnext@gmail.com", birthDate: "2002-03-24", designation: "junior", salary: 5000, joinDate: "2023-01-02", Department: "Nodejs" },
    { firstName: "dishang", lastName: "patel", email: "dishang.jnext@gmail.com", birthDate: "2003-08-19", designation: "junior", salary: 12000, joinDate: "2022-01-02", Department: "Nodejs" },
    { firstName: "jagdish", lastName: "koladiya", email: "jagdish.jnext@gmail.com", birthDate: "1996-09-02", designation: "senior", salary: 20000, joinDate: "2022-05-02", Department: "reactjs" },
    { firstName: "aryan", lastName: "golakiya", email: "aryan.jnext@gmail.com", birthDate: "2001-03-24", designation: "junior", salary: 10000, joinDate: "2021-03-02", Department: "Nodejs" },
    { firstName: "kaushik", lastName: "ghori", email: "kaushik.jnext@gmail.com", birthDate: "2001-05-12", designation: "junior", salary: 11000, joinDate: "2021-07-02", Department: "reactjs" },
    { firstName: "manthan", lastName: "patel", email: "manthan.jnext@gmail.com", birthDate: "2000-11-24", designation: "junior", salary: 12000, joinDate: "2020-08-02", Department: "wordpress" },
    { firstName: "nikunj", lastName: "vekariya", email: "nikunj.jnext@gmail.com", birthDate: "1998-06-14", designation: "senior", salary: 24000, joinDate: "2019-04-02", Department: "reactjs" },
    { firstName: "yash", lastName: "nariya", email: "yash.jnext@gmail.com", birthDate: "1996-07-22", designation: "projectmaneger", salary: 24000, joinDate: "2023-01-02", Department: "reactnative" },
    { firstName: "vivek", lastName: "patel", email: "vivek.jnext@gmail.com", birthDate: "1997-04-15", designation: "senior", salary: 22000, joinDate: "2017-11-02", Department: "reactnative" },
    { firstName: "raj", lastName: "savaliya", email: "raj.jnext@gmail.com", birthDate: "1998-02-12", designation: "senior", salary: 15000, joinDate: "2019-10-02", Department: "android" }
]



//Get/Print employees who completes 25, 26, and 27 year this current year.



let findEmployoees = employeesDetail.filter((value) => {
    let findAge = new Date().getFullYear() - new Date(value.birthDate).getFullYear()
    return (findAge <= 27 && findAge >= 25)
})
console.log(findEmployoees)




//Get/Print total salary of NodeJS department's employees.


let filtetSalary = employeesDetail.filter((forDepartment) => {
    let getDepartment = forDepartment.Department
    if (getDepartment == "Nodejs")
        return forDepartment.salary
}).map((value) => { return value.salary }).reduce((total, value) => { return total + value })
console.log(`Total salary of Node js department  is  : ${filtetSalary}`)




//Get lowest and highest salary of employee including all department...



let getSalary = employeesDetail.map((forSalary) => { return forSalary.salary })
let findhigest = Math.max.apply(0, getSalary)
let findlowest = Math.min.apply(0, getSalary)
let filterHighest = employeesDetail.filter((value) => {
    return value.salary == findhigest
})
console.log("Highest salary employee  : ", filterHighest)
let filterLowest = employeesDetail.filter((value) => {
    return value.salary == findlowest
})
console.log("Lowest salary employee  : ", filterLowest)




// Print full name of Employee(s) with Designation whose experience is equal and greater than 1.5 year.

let filterEmployees = employeesDetail.filter((value) => {
    let experienceCount = ((new Date().getTime() - new Date(value.joinDate).getTime()) / (1000 * 3600 * 24 * 365)).toFixed(1)
    return experienceCount >= 1.5
}).map((value) => {
    let obj = {}
    obj.name = value.firstName + " " + value.lastName
    obj.designation = value.designation
    return obj
})
console.log(filterEmployees)


