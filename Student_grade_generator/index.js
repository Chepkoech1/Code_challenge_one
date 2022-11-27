//this function takes one argument that is an integer and returns the grade scored.
function assignGrade(grade){
    if(grade > 100 && grade < 0){
        return `${grade} is invalid!`;
    }
    else{
        if (grade > 79) {
            return  "A";
        }
        else if (grade > 59 && grade <= 79) {
            return  "B";
        }
        else if (grade > 49 && grade <= 59){
            return  "C";
        }
        else if (grade > 39 && grade <= 49){
            return  "D";
        }
        else{
            return  "E";
        }
    }

} 

//Prompt student to input the mark scored
let marks = prompt("Enter Marks");
let grade = assignGrade(marks);

//output the grade scored
alert(`You scored grade: ${grade}`);

/*
    //or output grade to the console window;
    console.log(assignGrade(marks))
*/
