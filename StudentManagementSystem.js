var numberOfStudents = 0;

function addStudent() {
    return ++numberOfStudents;
}

function getNumberOfStudents() {
    return numberOfStudents;
}

var students = [];

function addStudent(name) {
    students.push(name);
    numberOfStudents = students.length;
}

function clearStudents() {
    students = [];
    numberOfStudents = 0;
}

function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

function getStudentByInitials(name, firstCharacter) {
    return name[0] === firstCharacter;
}

function isFullName(name) {
    return name.split(' ').length === 2; 
}
function getStudentByInitials(initial) {
    var i = 0;
    var j = 0;
    var result = [];
    
    while (i < students.length) {
        if (students[i][0] === initial) {
            result.push(students[i]);
        }
        i++;
    }
    return result;
}

function createStudent(firstName, lastName, email, age, education) {
    var student = {
        firstName,
        lastName,
        fullName: createFullName(firstName, lastName),
        email,
        age,
        education
    };
    return student;
}

var me = createStudent("Najla", "Seghaier", "najla@gmail.com", 26, "SW engineer");

function addSkills(student, skills) {
    if(!student.skills){
        student.skills = skills;
    } else {
        for (var i = 0; i<skills.length; i++){
            // var isNew = true;
            // for(var j =0; j<student.skills.length; j++) {
            //     if(skills[i] === student.skills[j]) {
            //        isNew = false; 
            //     } 
            // }       
            // if(isNew === true) {
            //     student.skills.push(skills[i]); 
            // }
    
            if(student.skills.indexOf(skills[i]) === -1) {
                student.skills.push(skills[i]);
            }
        }
    }
    
}

function addStudent(student) {
    students.push(student);
}

function removeStudent(firstName) {
    for (var i = 0; i<students.length; i++) {
        if(students[i].firstName === firstName) {
            students.splice(i, 1);
        }
    }
    // var index;
    // do {
    //     index = students.findIndex(x => {
    //         return x.firstName === firstName;
    //     });
    //     if(index !== -1)
    //     students.splice(index, 1);
    // } while(index !== -1);
}

function isOlderThan(student, age) {
    return student.age > age;
}

function doesStudentHaveSkills(student) {
    if(!student.skills) {
        return false;
    }
    return student.skills.length !== 0;
    // return (student.skills && student.skills.length !== 0) == true;
}

function isStudentQualified(student) {
    return isOlderThan(student, 18) && doesStudentHaveSkills(student);
}

function numberOfStudentsOlderThan(age) {
    var number = 0;
    for(var i =0; i<students.length; i++) {
        if(isOlderThan(students[i], age)) {
            number++;
        }
    }
    return number;
}

function getStudentsWithSkills() {
    var i = 0;
    var result = [];
    while(i<students.length) {
        if(doesStudentHaveSkills(students[i])) {
            result.push(students[i]);
        }
        i++;
    }
    return result;
}

function getAllStudentswithSkill(skill) {
    var result = [];
    for (var i = 0; i<students.length; i++) {
        if(students[i].skills.indexOf(skill) !== -1) {
            result.push(students[i]);
        }
    }
    return result;
}

