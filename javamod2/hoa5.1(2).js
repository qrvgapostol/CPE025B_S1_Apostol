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

// add new contact
contacts.push({
  name: "Maisie Haley",
  phone: "0913 531 3030",
  email: "risus.quisque@urna.ca"
});

// display first contact
console.log(
  contacts[0].name + " / " +
  contacts[0].phone + " / " +
  contacts[0].email
);

// display last contact using length
let lastIndex = contacts.length - 1;
console.log(
  contacts[lastIndex].name + " / " +
  contacts[lastIndex].phone + " / " +
  contacts[lastIndex].email
);