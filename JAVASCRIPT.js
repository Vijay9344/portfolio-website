document.addEventListener("DOMContentLoaded", function () {
  loadProjects();
  loadSkills();
});

// ==== CRUD FOR SKILLS ====
function addSkill() {
  let skillName = document.getElementById("skillName").value.trim();
  if (skillName === "") {
      alert("Skill name cannot be empty!");
      return;
  }

  let skills = JSON.parse(localStorage.getItem("skills")) || [];
  skills.push(skillName);
  localStorage.setItem("skills", JSON.stringify(skills));

  document.getElementById("skillName").value = "";
  loadSkills();
}

function loadSkills() {
  let skills = JSON.parse(localStorage.getItem("skills")) || [];
  let skillList = document.getElementById("skillList");
  skillList.innerHTML = "";

  skills.forEach((skill, index) => {
      let li = document.createElement("li");
      li.innerHTML = `
          ${skill} 
          <button class="edit-btn" onclick="editSkill(${index})">Edit</button>
          <button class="delete-btn" onclick="deleteSkill(${index})">Delete</button>
      `;
      skillList.appendChild(li);
  });
}

function editSkill(index) {
  let skills = JSON.parse(localStorage.getItem("skills")) || [];
  let newSkillName = prompt("Enter new skill name:", skills[index]);

  if (newSkillName) {
      skills[index] = newSkillName;
      localStorage.setItem("skills", JSON.stringify(skills));
      loadSkills();
  }
}

function deleteSkill(index) {
  let skills = JSON.parse(localStorage.getItem("skills")) || [];
  skills.splice(index, 1);
  localStorage.setItem("skills", JSON.stringify(skills));
  loadSkills();
}

// ==== CRUD FOR PROJECTS ====
function addProject() {
  let projectName = document.getElementById("projectName").value.trim();
  if (projectName === "") {
      alert("Project name cannot be empty!");
      return;
  }

  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.push(projectName);
  localStorage.setItem("projects", JSON.stringify(projects));

  document.getElementById("projectName").value = "";
  loadProjects();
}

function loadProjects() {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  let projectList = document.getElementById("projectList");
  projectList.innerHTML = "";

  projects.forEach((project, index) => {
      let li = document.createElement("li");
      li.innerHTML = `
          ${project} 
          <button class="edit-btn" onclick="editProject(${index})">Edit</button>
          <button class="delete-btn" onclick="deleteProject(${index})">Delete</button>
      `;
      projectList.appendChild(li);
  });
}

function editProject(index) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  let newProjectName = prompt("Enter new project name:", projects[index]);

  if (newProjectName) {
      projects[index] = newProjectName;
      localStorage.setItem("projects", JSON.stringify(projects));
      loadProjects();
  }
}

function deleteProject(index) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(projects));
  loadProjects();
}