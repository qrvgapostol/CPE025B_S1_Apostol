class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = {};
    }

    addCourse(course, level) {
        this.courses[course] = level;
    }

    removeCourse(course) {
        delete this.courses[course];
    }

    editCourse(course, level) {
        this.courses[course] = level;
    }
}

class ExtendedUser extends User {
    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    set fullName(value) {
        const parts = value.split(' ');
        this.name = parts[0] || '';
        this.surname = parts[1] || '';
    }

    static match(teacher, student, courseName) {
        const matches = [];
        for (let course in student.courses) {
            if (teacher.courses.hasOwnProperty(course) && teacher.courses[course] >= student.courses[course]) {
                matches.push({course: course, level: student.courses[course]});
            }
        }
        if (courseName) {
            return matches.find(m => m.course === courseName);
        }
        return matches;
    }
}

class Student extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'student'});
    }
}

class Teacher extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'teacher'});
    }
}

class Tutoring {
    constructor() {
        this.students = [];
        this.teachers = [];
    }

    getStudentByName(name, surname) {
        return this.students.find(s => s.name === name && s.surname === surname);
    }

    getTeacherByName(name, surname) {
        return this.teachers.find(t => t.name === name && t.surname === surname);
    }

    getStudentsForTeacher(teacher) {
        return this.students.filter(student => ExtendedUser.match(teacher, student).length > 0);
    }

    getTeacherForStudent(student) {
        return this.teachers.filter(teacher => ExtendedUser.match(teacher, student).length > 0);
    }

    addStudent(name, surname, email) {
        const student = new Student({name, surname, email});
        this.students.push(student);
        return student;
    }

    addTeacher(name, surname, email) {
        const teacher = new Teacher({name, surname, email});
        this.teachers.push(teacher);
        return teacher;
    }
}

// --- Test ---
let tutoring = new Tutoring();

tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');

let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);

let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);

let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);

console.log(students[0]);
console.log(teachers[0]);

student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);

console.log(students[0]);
console.log(teachers[0]);