// Initialize the Data
let contacts = [
    {
        name: "Linus Torvalds",
        role: "System Admin",
        skills: ["Linux", "Git", "Kernels"],
        availability: true
    },
    {
        name: "Ada Lovelace",
        role: "Logic Analyst",
        skills: ["Algorithms", "Math", "Analytics"],
        availability: false
    },
    {
        name: "Alan Turing",
        role: "Cryptographer",
        skills: ["Logic", "Enigma", "Security"],
        availability: true
    }
];

// Persistent Loop
while (true) {
    let action = prompt(
        "Choose an action: show | all | add | search | quit"
    ).toLowerCase();

    if (action === "quit") {
        alert("Goodbye!");
        break;
    }

    else if (action === "show") {
        let index = parseInt(prompt("Enter contact index (starting from 0):"));
        if (!isNaN(index) && index >= 0 && index < contacts.length) {
            let contact = contacts[index];
            alert(`Name: ${contact.name}\nRole: ${contact.role}\nFirst Skill: ${contact.skills[0]}`);
        } else {
            alert("Invalid index!");
        }
    }

    else if (action === "all") {
        let allNames = contacts.map(c => c.name).join("\n");
        alert("Contacts:\n" + allNames);
    }

    else if (action === "add") {
        let name = prompt("Enter Name:").trim();
        let role = prompt("Enter Role:").trim();
        let skill = prompt("Enter a Skill:").trim();

        if (name !== "" && role !== "" && skill !== "") {
            contacts.push({
                name: name,
                role: role,
                skills: [skill],
                availability: true // Default new contact as available
            });
            alert(`${name} has been added to contacts.`);
        } else {
            alert("All fields are required!");
        }
    }

    else if (action === "search") {
        let searchName = prompt("Enter Name to search:").trim();
        let found = false;
        for (let contact of contacts) {
            if (contact.name.toLowerCase() === searchName.toLowerCase()) {
                let status = contact.availability ? "Available" : "Busy";
                alert(`Role: ${contact.role}\nStatus: ${status}`);
                found = true;
                break;
            }
        }
        if (!found) {
            alert("Contact not found!");
        }
    }

    else {
        alert("Invalid action! Please choose from: show, all, add, search, quit.");
    }
}