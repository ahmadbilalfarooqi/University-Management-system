// person class 
class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
}
;
//student class
class Student extends Person {
    constructor(rollNumber, name, age) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerforCourses(course) {
        this.courses.push(course);
    }
}
;
// instructor class
class Instructor extends Person {
    constructor(salary, name, age) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourses(course) {
        this.courses.push(course);
    }
}
;
// course class
class Course {
    constructor(id, name) {
        this.students = [];
        this.instructors = [];
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.students.push(std);
    }
    setInstructor(instructor) {
        this.instructors.push(instructor);
    }
}
;
// Department class
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
;
const std1 = new Student("PIAIC1234", "Ahmad_Bilal", 28);
const std2 = new Student("PIAIC5678", "Imran Jutt", 34);
//console.log(std1);
const Instructor1 = new Instructor(50000, "Sir_Umer", 45);
const Instructor2 = new Instructor(60000, "Sir_Ijaz", 50);
const course1 = new Course(101, "BlockChian");
const course2 = new Course(105, "Metaverse");
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);
course2.addStudent(std2);
course1.setInstructor(Instructor1);
course1.setInstructor(Instructor2);
const D1 = new Department("Computer_Science");
D1.addCourse(course1);
console.log(D1.courses[0]);
export {};
