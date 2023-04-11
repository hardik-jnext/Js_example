
//29. make simple students markesheet with using condition statement


// const studentsDetails = [{ "name": "hardik", "subject": { "maths": 75, "science": 95, "hindi": 82 } },
// { "name": "dishang", "subject": { "maths": 79, "science": 96, "hindi": 95 } }
// ]

// const studentResult = studentsDetails.map((total) => {
//   let objEntries = Object.values(total.subject)

//   // sum of all marks

//   let totalMarks = objEntries.reduce((result, current) => {

//     return result + current
//   })
//   total.Total = totalMarks

//   // Average of markes

//   const averageMark = (totalofMarks) => { return totalofMarks / objEntries.length }
//   total.Average = averageMark(totalMarks).toFixed(0)

//   //  calculate percentage

//   let finalTotal = objEntries.length * 100
//   const percentage = (totalofMarks) => { return (totalofMarks / finalTotal) * 100 }
//   total.percentage = percentage(totalMarks).toFixed(2)

//   //  assign grade according to marks

//   total.grade = { ...total.subject }
//   for (let grade in total.grade) {

//     if (total.grade[grade] >= 90) {

//       total.grade[grade] = "A+"
//     } else if (total.grade[grade] >= 80) {
//       total.grade[grade] = "A"

//     } else if (total.grade[grade] >= 70) {
//       total.grade[grade] = "B"

//     } else if (total.grade[grade] >= 50) {
//       total.grade[grade] = "C"

//     } else {
//       total.grade[grade] = "fail"
//       console.log("fail", total.grade[grade])
//     }
//   }
//   return total

// })
// console.log(studentResult.sort((a, b) => { return b.percentage - a.percentage }))




//30. Search specific word and its position from string

// const word = "anyway"
// let finWord = word.search("y")
// console.log(word.charAt(finWord),finWord)


//31. swap given word with specified word from string replace word 

// const word = "anyway"
// let finWord = word.replace(/y/g,"d")
// console.log(finWord)


//32  remove last element

// let vehicals = ["car","bus","bike","boat","Train"];
// vehicals.pop()

//  console.log(vehicals);


// // add new element in array after last element  

//     let vehical = ["car","bus","bike","boat","Train"];
// vehical.push("ship")

// console.log(vehical);


//33. concate string array value 


// let lightVehical = ["car","bike"]
// let heavyVehical = ["boat","Train","bus"];

// let vehicals = lightVehical.concat(heavyVehical)
// console.log(vehicals)

//34. check value is in string or number

//  const person = "dishang"
//  console.log(typeof person)


//35. Convert datetime format of given datetime

// const samay = new Date();

// console.log(samay.toISOString().slice(0,10))
// console.log(samay.toISOString().slice(11,19))


//36. find smaller and greater number from given array

// const num = [10,40,56,100,20]

// console.log(Math.max.apply(null,num),Math.min.apply(null,num))


//37. convert string type array to string, string to array 

//const persons = ["dishang","hardik","vivek"]

//array to string

//let val = persons.toString()
//console.log(val.split(3))

//string to array
//console.log(val.split( ))


//38.find longest value from string array      

// const persons = ["dishang","hardik","vivek","yash"]

// console.log(persons.reduce((a,b)=>{

// return a.length -b.length ? a :b

// }))


//39. search and add new key in object array 

//   let arrr = [{"id": 1,"Name":"hardik"},{"id": 2,"Name":"dishang"}, {"id": 3,"Name":"vivek"}, {"id": 4,"Name":"raj"}] 

//     let keySearch = "Name"

//     arrr.filter((value)=>{
//           let valueKeys = Object.keys(value)
//          if(valueKeys.includes(keySearch))
//          {
//             console.log("found")
//          }else{

//             value[keySearch] = "value"
//          }
//     return value
//    })
//      console.log(arrr)


// 40. Convert json array to string and string to  json array

// let jsonData = {
//    "employee": [
//       {
//          "id": 1,
//          "Name": "Hardik"
//       },
//       {
//          "id": 2,
//          "Name": "Dishang"
//       },
//       {
//          "id": 3,
//          "Name": "raj"
//       },
//       {
//          "id": 4,
//          "Name": "mukesh"
//       }
//    ]
// }

// let jsonTostring = JSON.stringify(jsonData)
// let stringTojson = JSON.parse(jsonTostring)
// console.log(typeof jsonTostring)

// 41. define object array and search value from it and find perticular index 

// const students = [{ Name: "hardik", Age: 21 }, { Name: "Dishang", Age: 62 }]

// let studentValue = "HARDIK"

// console.log(students.findIndex((val) => {

//    return val.Name.toLowerCase() === typeof studentValue == String ? studentValue.toLowerCase() : studentValue || (val.Age === studentValue)
// }))


//42.  how to get seconds,hours or minutes gap between 2 datetime


// function gethourDiffrence(startDate, endDate) {

//    let pastDate = new Date(startDate).getDate();
//    let currentDate = new Date(endDate).getDate();

//    let hourDiffrence = Math.abs(pastDate - currentDate) * 24
//    let miniuteDiffrence = hourDiffrence * 60
//    let secondsDiffrence = miniuteDiffrence * 60

//    console.log(`Total hours: ${hourDiffrence} Total miniute: ${miniuteDiffrence} Total seconds: ${secondsDiffrence}`)

// }

// gethourDiffrence("2023-01-15", "2023-01-30")




//      43. How many weeks between two dates and gives all week's start and end dates 

// function gethourDiffrence(startDate, endDate) {
//    let curr = new Date(startDate);  
//    let firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
//    let ecurr = new Date(endDate)
//    let lastday = new Date(ecurr.setDate(ecurr.getDate() - ecurr.getDay() + 6));
//    let totalWeeks = Math.ceil(Math.abs((lastday.getTime() - firstday.getTime()) / (1000 * 3600 * 24 * 7)))
//    const weekDate = []
//    for (i = 0; i < totalWeeks; i++) {
//       const weekObj = {}
//       let firstDay = weekDate.length > 0 ? new Date(weekDate[weekDate.length - 1].endDate).setDate(new Date(weekDate[weekDate.length - 1].endDate).getDate() + 1) : curr.getDay() == 0 ? new Date().setDate(curr.getDate() - curr.getDay()) : new Date().setDate((curr.getDate() - curr.getDay()))
//       let endDay = new Date(firstDay).setDate(new Date(firstDay).getDate() + 6)
//       weekObj.startDate = new Date(firstDay)
//       weekObj.endDate = new Date(endDay)
//       weekDate.push(weekObj)
//    }
//    console.log(weekDate)
// }
//  gethourDiffrence("2023-01-17", "2023-02-28")




//   44. get number between given range 

// let range = [1,5,7,25,18]
// function findRange(start,end) {
//      console.log(range.filter((value)=> { return  value >= start && value <= end } ))    
// }
// findRange(5,25)


//45. check leap year

// function leapcheck(year) {
//       const startDate = new Date(`${year}-01-01`);
//       const endDate = new Date(`${year}-12-31`);

//       let dayCount = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24) + 1

//       if (dayCount == 366) {
//             console.log(`${year} is a leap year`)
//       } else {
//             console.log(`${year} is not leap year`)
//       }
// }
// leapcheck(2020)



// add pagination nad filter user class function 

let employeeRecords = [{ name: "hardik", Age: 21 }, { name: "ayush", Age: 20 }, { name: "raj", Age: 11 }, { name: "mahesh", Age: 19 }, { name: "dishang", Age: 5 },
{ name: "zakir", Age: 28 }, { name: "brijesh", Age: 22 }, { name: "elvish", Age: 32 }, { name: "gaurang", Age: 25 }, { name: "ishan", Age: 46 },
{ name: "jay", Age: 27 }, { name: "kalpesh", Age: 29 }, { name: "lokesh", Age: 17 }, { name: "preet", Age: 18 }, { name: "naitik", Age: 2 }]

let studentRecords = [{ name: "rakesh", Age: 21 }, { name: "mahesh", Age: 20 }, { name: "manoj", Age: 11 }, { name: "suresh", Age: 19 }]

class employee {
    constructor(value){
this.value = value
    }

    sortAsscending() {
        return this.value.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            return 0
        })
    }
    sortdecending() {
        return this.value.sort((a, b) => {
            if (a.name > b.name) {
                return -1
            }
            return 0
        })
    }
    empFilter() {
        return this.value.filter((value) => {
            return value.Age > 18
        }
        )
    }
    empSearch() {
        return this.value.find((value) => {
            //  let searchRecords = "hardik"
            if (value.name == "hardik") {
                return value.name
            } else {
                return null
            }
        })
    }
    pagination(pagrSize, pageNumber) {
        return this.value.slice(pagrSize * (pageNumber - 1), pagrSize * pageNumber)
    }
}
let empObj = new employee(studentRecords)
//console.log("Asscending :", empObj.sortAsscending())
//console.log("Decending:", empObj.sortdecending())
//console.log("Filter :", empObj.empFilter())
// console.log("Search :", empObj.empSearch())
// console.log("Records :", empObj.pagination(3, 1))
