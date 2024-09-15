let listOfAssignments = document.querySelector(".assignments");

async function fetchAssignments() {
  try {
    const response = await fetch("/assignments.json");
    if (!response.ok) {
      throw new Error();
    }
    const assignments = await response.json();
    return assignments;
  } catch (error) {
    console.error("Error fetching assignments:", error);
  }
}

async function displayAssignments() {
  let assignments = await fetchAssignments();
  console.log(assignments);
  if (assignments) {
    for (let i = 0; i < assignments.length; i++) {
      console.log(assignments.length);
      let assignment = document.createElement("div");
      let header = document.createElement("h2");
      header.textContent = assignments[i].header;
      let description = document.createElement("p");
      description.textContent = assignments[i].description;
      let githubLink = document.createElement("a");
      githubLink.href = assignments[i].link;
      githubLink.textContent = "Github Link";

      assignment.appendChild(header);
      assignment.appendChild(description);
      assignment.appendChild(githubLink);
      assignment.classList.add("assignment")
      listOfAssignments.appendChild(assignment);
    }
  }
}

displayAssignments();
