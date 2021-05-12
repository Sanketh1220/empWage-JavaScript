/**
 * Purpose - This code is written to check and get multiple info about the employee
 * 
 * @author Sanketh Chigurupalli
 * @since 12-05-2021
 */

//Assigning varaibles value as const as our intention is never changing there values
const IS_ABSENT = 0;
const IS_PRESENT = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORKING_HOURS_PER_MONTH = 160;

//Generating a random number
let employeeChecker =  Math.floor((Math.random() * 10) % 2);

//If-Else statement to check for presence and absence of employee
if (employeeChecker == IS_ABSENT) {
    console.log("Employee is present!");
} else {
    console.log("Employee is Absent!");
}

//Generating a random number
let empSalary = Math.floor((Math.random() * 10) % 3);
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

let totalEmpHours = 0;
let totalWorkingDays = 0;

/**
 * Runing a while loop until any of condition is satisfied max of working hours or working days
 */
while (totalEmpHours <= MAX_WORKING_HOURS_PER_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empSalary = Math.floor((Math.random() * 10) % 3);
    totalEmpHours += getWorkingHours(empSalary);
}

//Calculating employee wage
let empWage = totalEmpHours * WAGE_PER_HOUR;
console.log("Employee worked for " + totalWorkingDays + " days and for total of " 
    + totalEmpHours + " hours and wage is $" + empWage);
