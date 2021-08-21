class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student){
        if (this.students.filter(stu => stu.email === student.email).length) {
            console.log(`${student.email} is already registered.`);
        }
        else
        {
            this.students.push(student);
            console.log(`Registered ${student.email} to the bootcamp.`);
        }
        return this.students;
    }
}

const fullStack = new Bootcamp('Full-Stack', 'Advanced');
const cyrun = new Student('cyrun', 'cyrun2@yahoo.com', 'Jacksonville');
const tayla = new Student('Tayla', 'tayla@tayla.com', 'Baltimore');
const tayla2 = new Student('Tayla', 'tayla@tayla.com', 'Baltimore');