class User {
    // Private properties
    #firstName;
    #lastName;
    #email;

    constructor(firstName, lastName, email) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setEmail(email);
    }

    getFirstName() {
        return this.#firstName;
    }

    setFirstName(value) {
        if (!/^[A-Z][a-zA-Z]*$/.test(value)) {
            throw new Error("First name must start with an uppercase letter and contain only letters.");
        }
        this.#firstName = value;
    }

    getLastName() {
        return this.#lastName;
    }

    setLastName(value) {
        if (!/^[A-Z][a-zA-Z]*$/.test(value)) {
            throw new Error("Last name must start with an uppercase letter and contain only letters.");
        }
        this.#lastName = value;
    }

    getEmail() {
        return this.#email;
    }

    setEmail(value) {
        if (!/^[a-zA-Z]+(\.[a-zA-Z]+)*@[a-zA-Z]+(\.[a-zA-Z]+)+$/.test(value)) {
            throw new Error("Email must contain only letters and dots in proper format.");
        }
        this.#email = value;
    }
}

// Test the solution
try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1.getFirstName(), user1.getLastName(), user1.getEmail());
    
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com');
} catch (err) {
    console.log(err.message);
}