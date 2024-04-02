/**
 * Exercise 5: Create an array of objects, 
 * where each object represents a student with properties for name and grade. 
 * Use a for...of loop to calculate the average grade of all students.
 */

const studentReports = [
    {   'name' :    'poki',
        'grade':    3.5 
    },
    {
        'name'  :   'sudhu',
        'grade' :   4.5
    },
    {
        'name'  :   'venky',
        'grade' :   4.3
    },
    {
        'name'  :   'ram',
        'grade' :   4.4
    }
]
let gradeTotal = 0;
for(let report of studentReports){
    gradeTotal += report['grade'];
}
console.log('All Grades Combined! - ' + Math.floor(gradeTotal));