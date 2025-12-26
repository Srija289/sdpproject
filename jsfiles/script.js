// DASHBOARD DATA (ES6)
const elections = {
  past: [
    "India General Election 2014",
    "India General Election 2019",
    "State Elections 2021"
  ],
  present: [
    "India General Election 2024",
    "State Elections 2025"
  ],
  future: [
    "India General Election 2029",
    "State Elections 2030"
  ]
};

// DOM MANIPULATION
function showElections(type) {
  const list = document.getElementById("electionList");
  list.innerHTML = "<ul>" +
    elections[type].map(e => `<li>${e}</li>`).join("") +
    "</ul>";
}

// FORM VALIDATION
function validateForm() {
  alert("Feedback submitted successfully!");
  return false;
}
