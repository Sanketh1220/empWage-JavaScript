/**
 * Purpose - This code is written to check and get multiple info about the employee
 * 
 * @author Sanketh Chigurupalli
 * @since 12-05-2021
 */

//UC-1

//Generating a random number
let employeeChecker =  Math.floor((Math.random() * 10) % 2);

//Assigning varaibles value as const as our intention is never changing there values
const IS_ABSENT = 0;

const IS_PRESENT = 1;

//If-Else statement to check for presence and absence of employee
if (employeeChecker == IS_ABSENT) {
    console.log("Employee is present!");
} else {
    console.log("Employee is Absent!");
}

//UC-2

//Generating a random number
let empSalary = Math.floor((Math.random() * 10) % 3);

//Assigning varaibles value as const as our intention is never changing there values
const PART_TIME_HOURS = 4;

const FULL_TIME_HOURS = 8;

const WAGE_PER_HOUR = 20;

let empHours = 0;

/**
 * Function of switch case to calculate wage according to random values generated
 * @param {*} empSalary 
 * @returns 
 */
function getWorkingHours(empSalary){
    switch(empSalary) {
        case 0:
            return 0;

        case 1:
            return PART_TIME_HOURS;
    
        case 2:
            return FULL_TIME_HOURS;
    }
}

empHours = getWorkingHours(empSalary);

//Calculating employee wage
let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee wage is $" + empWage);
