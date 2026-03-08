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

// --- Test ---
let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 4);
teacher1.addCourse('maths', 4);

let match = ExtendedUser.match(teacher1, student1);
console.log(match);

teacher1.editCourse('maths', 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match);

teacher1.addCourse('physics', 4);
match = ExtendedUser.match(teacher1, student1, 'physics');
console.log(match);