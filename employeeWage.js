let employeeChecker =  Math.floor((Math.random() * 10) % 2);

const IS_ABSENT = 0;

const IS_PRESENT = 1;

if (employeeChecker == IS_ABSENT) {
    console.log("Employee is present!");
} else {
    console.log("Employee is Absent!");
}


