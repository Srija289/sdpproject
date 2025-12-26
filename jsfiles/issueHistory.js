// Load reported issues history
function loadIssueHistory() {
  const history = JSON.parse(localStorage.getItem("issueHistory")) || [];
  const list = document.getElementById("historyList");

  if (!list) return;

  list.innerHTML = history.map(item => `<li>${item}</li>`).join("");
}

window.onload = loadIssueHistory;

// Save issue
function reportIssue() {
  const issue = document.getElementById("issueText").value;

  if (issue.trim() === "") {
    alert("Please enter an issue");
    return;
  }

  const history = JSON.parse(localStorage.getItem("issueHistory")) || [];
  history.push(issue);

  localStorage.setItem("issueHistory", JSON.stringify(history));
  document.getElementById("issueText").value = "";

  loadIssueHistory();
}

// Clear history
function clearHistory() {
  localStorage.removeItem("issueHistory");
  loadIssueHistory();
}