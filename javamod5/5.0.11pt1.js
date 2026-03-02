let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

// Function to display a single contact by index
function showContact(contactList, index) {
    if (!Array.isArray(contactList)) {
        console.error("First argument must be an array of contacts.");
        return;
    }
    if (typeof index !== "number" || index < 0 || index >= contactList.length) {
        console.error("Invalid index provided.");
        return;
    }

    const contact = contactList[index];
    console.log(`Name: ${contact.name}`);
    console.log(`Phone: ${contact.phone}`);
    console.log(`Email: ${contact.email}`);
}

// Function to display all contacts
function showAllContacts(contactList) {
    if (!Array.isArray(contactList)) {
        console.error("Argument must be an array of contacts.");
        return;
    }

    contactList.forEach((contact, idx) => {
        console.log(`--- Contact ${idx + 1} ---`);
        console.log(`Name: ${contact.name}`);
        console.log(`Phone: ${contact.phone}`);
        console.log(`Email: ${contact.email}`);
    });
}

// Function to add a new contact
function addNewContact(contactList, name, phone, email) {
    if (!Array.isArray(contactList)) {
        console.error("First argument must be an array.");
        return;
    }
    if (!name || !phone || !email) {
        console.error("All contact details (name, phone, email) must be provided.");
        return;
    }

    contactList.push({ name, phone, email });
    console.log(`Contact "${name}" added successfully!`);
}

// Example usage:
showAllContacts(contacts);
console.log("\nDisplaying a single contact (index 1):");
showContact(contacts, 1);
console.log("\nAdding a new contact:");
addNewContact(contacts, "Alice Johnson", "0912 345 6789", "alice.johnson@example.com");
console.log("\nUpdated contact list:");
showAllContacts(contacts);