/**
 * Purpose - This code is written to check and get multiple info about the employee
 * 
 * @author Sanketh Chigurupalli
 * @since 12-05-2021
 */

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

//Generating a random number
let empSalary = Math.floor((Math.random() * 10) % 3);

//Assigning varaibles value as const as our intention is never changing there values
const PART_TIME_HOURS = 4;

const FULL_TIME_HOURS = 8;

const WAGE_PER_HOUR = 20;

//Switch case to calculate wage according to random values generated
switch(empSalary) {
    case 0:
        console.log("Employee wage is 0");
        break;

    case 1:
        console.log("Employee wage is $" + (PART_TIME_HOURS * WAGE_PER_HOUR));
        break;

    case 2:
        console.log("Employee wage is $" + (FULL_TIME_HOURS * WAGE_PER_HOUR));
}