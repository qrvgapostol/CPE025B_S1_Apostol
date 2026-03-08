// --- User class ---
class User {
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
        if (!this.#email) return null;
        return this.#email;
    }

    setEmail(value) {
        if (!/^[a-zA-Z]+(\.[a-zA-Z]+)*@[a-zA-Z]+(\.[a-zA-Z]+)+$/.test(value)) {
            throw new Error("Email must contain only letters and dots in proper format.");
        }
        this.#email = value;
    }
}

// --- Users class ---
class Users {
    constructor() {
        this.usersMap = new Map();
    }

    add(firstName, lastName, email) {
        if (this.usersMap.has(email)) {
            throw new Error(`User with email ${email} already exists.`);
        }
        const user = new User(firstName, lastName, email);
        this.usersMap.set(email, user);
    }

    delete(email) {
        if (!this.usersMap.delete(email)) {
            throw new Error(`No user found with email ${email}.`);
        }
    }

    get(email) {
        return this.usersMap.get(email) || null;
    }

    getAll(field) {
        const validFields = ["name", "surname", "email"];
        if (!validFields.includes(field)) {
            throw new Error(`Invalid field for sorting: ${field}`);
        }
        const usersArray = Array.from(this.usersMap.values());
        return usersArray.sort((a, b) => {
            let aValue, bValue;
            switch (field) {
                case "name": aValue = a.getFirstName(); bValue = b.getFirstName(); break;
                case "surname": aValue = a.getLastName(); bValue = b.getLastName(); break;
                case "email": aValue = a.getEmail(); bValue = b.getEmail(); break;
            }
            return aValue.localeCompare(bValue);
        });
    }
}

// --- Test ---
try {
    let users = new Users();
    users.add("Aaaa", "Bbbb", "cccc@gmail.com");
    users.add("Mmmm", "Ffff", "eeee@gmail.com");
    users.add("Aaaa", "Bbbb", "cccc@gmail.com");
    users.add("Xxxx", "Oooo", "dddd@gmail.com");
} catch (err) {
    console.log(err.message);
}