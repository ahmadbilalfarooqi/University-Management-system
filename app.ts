

// person class 
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
};



//student class
class Student extends Person {
  rollNumber: string;
  courses: Course[] = [];

  constructor(rollNumber: string, name:string, age:number) {
    super(name,age)
    this.rollNumber = rollNumber;
  }
  registerforCourses(course: any) {
    this.courses.push(course);
  }
};



// instructor class
class Instructor extends Person {
    salary: number;
    courses: any[] = [];
  
    constructor(salary: number, name:string, age:number) {
        super(name,age)
      this.salary = salary;
    }
    assignCourses(course: Course) {
      this.courses.push(course);
    }
  };

  

// course class
class Course {
  id:number;
  name:string;
  students:Student[] = []
  instructors:Instructor[]=[]

  constructor(id:number,name:string){
    this.id=id;
    this.name=name;
  }
  addStudent (std:Student){
    this.students.push(std)

  }
  setInstructor(instructor:Instructor){
      this.instructors.push(instructor)
  }
};



// Department class
class Department {
  name:string;
  courses:Course[] = []

  constructor(name:string){
    this.name=name;
  }
  addCourse(course:Course){
    this.courses.push(course)
  }
};



const std1 = new Student ("PIAIC1234", "Ahmad_Bilal",28);
  const std2 = new Student ("PIAIC5678", "Imran Jutt",34);
  //console.log(std1);
  

const Instructor1 = new Instructor(50000, "Sir_Umer", 45)
const Instructor2 = new Instructor(60000, "Sir_Ijaz", 50)

const course1 = new Course(101,"BlockChian")
const course2 = new Course(105,"Metaverse")

course1.addStudent(std1)
course1.addStudent(std2)
course2.addStudent(std1)
course2.addStudent(std2)

course1.setInstructor(Instructor1)
course1.setInstructor(Instructor2)

const D1 = new Department ("Computer_Science");
D1.addCourse(course1);
console.log(D1.courses[0]);