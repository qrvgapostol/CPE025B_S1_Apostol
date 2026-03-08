class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = {};
        this.messages = [];
    }

    addCourse(course, level) {
        this.courses[course] = level;
    }

    sendMessage(from, message) {
        this.messages.push({from: from.email, to: this.email, message});
    }

    showMessagesHistory() {
        this.messages.forEach(msg => {
            console.log(`${msg.from} -> ${msg.to}: ${msg.message}`);
        });
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
            if (teacher.courses[course] >= student.courses[course]) {
                matches.push({course, level: student.courses[course]});
            }
        }
        if (courseName) return matches.find(m => m.course === courseName);
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

class ExtendedTutoring extends Tutoring {
    sendMessages(from, toList, message) {
        toList.forEach(user => user.sendMessage(from, message));
    }
}

// --- Test ---
let tutoring = new ExtendedTutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');

let to = [
    tutoring.getStudentByName('Rafael', 'Fife'),
    tutoring.getStudentByName('Kelly', 'Estes')
];

tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');

to.forEach(user => user.showMessagesHistory());