let teamDirectory = [
  {
    name: "Leo Brooks",
    role: "Designer",
    skills: ["UI", "UX", "Figma"],
    available: true
  },
  {
    name: "Sasha Ivana",
    role: "Developer",
    skills: ["HTML", "CSS", "JS"],
    available: false
  },
  {
    name: "Jordan Lee",
    role: "Manager",
    skills: ["Planning", "Agile"],
    available: true
  }
];

// 2. Add a new specialist
teamDirectory.push({
  name: "Casey Moore",
  role: "QA Engineer",
  skills: ["Testing", "Debugging"],
  available: true
});

// 3. Update Sasha Ivana availability to true
teamDirectory[1].available = true;

// 4a. Name and first skill of the first team member
console.log(
  teamDirectory[0].name + " - " + teamDirectory[0].skills[0]
);

// 4b. Name and total number of skills of the last team member
let lastIndex = teamDirectory.length - 1;
console.log(
  teamDirectory[lastIndex].name + " - " +
  teamDirectory[lastIndex].skills.length + " skills"
);

// 4c. Total number of people in the directory
console.log("Total members: " + teamDirectory.length);