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

let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4);

console.log(`${student1.fullName}: ${Object.keys(student1.courses).length} courses`);
console.log(`${teacher1.fullName}: ${Object.keys(teacher1.courses).length} courses`);

student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${Object.keys(student1.courses).length} courses`);