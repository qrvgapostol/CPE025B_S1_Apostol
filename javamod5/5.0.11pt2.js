let contacts = [
    { name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummyac.co.uk" },
    { name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com" },
    { name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu" }
];

let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (const contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({ name, phone, email });
    }
}

// Function to sort contacts based on a chosen property
let sortContacts = function(contacts, property) {
    if (!(contacts instanceof Array)) {
        console.error("Contacts must be an array.");
        return;
    }
    if (!["name", "phone", "email"].includes(property)) {
        console.error("Invalid property. Must be 'name', 'phone', or 'email'.");
        return;
    }

    contacts.sort((a, b) => {
        if (a[property] > b[property]) return 1;
        if (a[property] < b[property]) return -1;
        return 0;
    });

    console.log(`Contacts sorted by ${property}:`);
    showAllContacts(contacts);
}

// Example usage:
console.log("Original Contacts:");
showAllContacts(contacts);

console.log("\nAdding a new contact:");
addNewContact(contacts, "Alice Johnson", "0912 345 6789", "alice.johnson@example.com");
showAllContacts(contacts);

console.log("\nSorting contacts by name:");
sortContacts(contacts, "name");

console.log("\nSorting contacts by phone:");
sortContacts(contacts, "phone");

console.log("\nSorting contacts by email:");
sortContacts(contacts, "email");