function sendEmail(from, to, message) {
    console.log(`Email sent from ${from.email} to ${to.email}: ${message}`);
}


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


    removeCourse(course) {
        delete this.courses[course];
    }

 
    editCourse(course, level) {
        if (this.courses.hasOwnProperty(course)) {
            this.courses[course] = level;
        } else {
            console.log(`Course ${course} not found.`);
        }
    }


    sendMessage(from, message) {
  
        this.messages.push({from: from.email, to: this.email, message});
   
        sendEmail(from, this, message);
    }

   
    showMessagesHistory() {
        this.messages.forEach(msg => {
            console.log(`${msg.to} -> ${msg.from}: ${msg.message}`);
        });
    }
}


let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');

teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);


console.log(`${student1.name}: ${Object.keys(student1.courses).length} courses`); 
console.log(`${teacher1.name}: ${Object.keys(teacher1.courses).length} courses`); 

teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');

student1.showMessagesHistory();
