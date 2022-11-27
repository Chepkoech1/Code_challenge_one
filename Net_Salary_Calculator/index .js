//Decalaring varibale to hold net salary from the function
let netSalary = calculateNetSalary();

//Outputing the calculated net salary
alert(`your net salary is ${netSalary}`);

//function to calcultate net salary
function calculateNetSalary() {
    const salary = parseInt(prompt("Enter your basic salary?"));
    const benefits = parseInt(prompt("Enter your benefits?"));
    
    const totalSalary = salary + benefits;

    const netSalary = totalSalary - (calculateTax(totalSalary) + calculateNHIF(totalSalary) + calculateNSSF(totalSalary));

    return netSalary;
}

//function to calculate tax for the user
function calculateTax(salary) {
    if (salary <= 24000) {
        return (10 / 100) * salary;
    }
    else if (salary > 24000 && salary <= 32333) {
        return (25 / 100) * salary;
    }
    else {
        return (30 / 100) * salary;
    }
}

//function to calculate NHIF deductions for the user
function calculateNHIF(salary) {
    if (salary < 6000) {
        return 150;
    }
    else if (salary < 8000) {
        return 300;
    }
    else if (salary < 12000) {
        return 400;
    }
    else if (salary < 15000) {
        return 500;
    }
    else if (salary < 20000) {
        return 600;
    } 
    else if (salary < 25000) {
        return 750;
    }
    else if (salary < 30000) {
        return 850;
    }
    else if (salary < 35000) {
        return 900;
    }
    else if (salary < 40000) {
        return 950;
    }
    else if (salary < 45000) {
        return 1000;
    }
    else {
        return 1100;
    }
}

//function to calculate NSSF deductions for the user
function calculateNSSF(salary) {
    return (6 / 100) * salary;
}

