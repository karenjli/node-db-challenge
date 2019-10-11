const db = require("../../data/dbConfig");

module.exports = {
  getProjects,
  getProjectById,
  getResources,
  getResourceById,
  getTaskById,
  getAllTasks,
  addResources,
  addProject,
  addTask,
};

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getAllTasks() {
  return db("projects as p")
    .join("tasks as t", "t.projectId", "p.id")
    .select(
      "p.projectName",
      "p.projectDescription",
      "t.taskName",
      "t.taskDescription",
    );
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getTaskById(id) {
  return db("tasks as t")
    .where("t.projectId", id)
    .first();
}

function getResourceById(id) {
  return db("resources")
    .where({ id })
    .first();
}

function addResources(resource) {
  return db("resources")
    .insert(resource)
    .then(ids => {
      return getResourceById(ids[0]);
    });
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getProjectById(ids[0]);
    });
}

function addTask(task) {
  return db("tasks as t")
    .insert(task)

    .then(ids => {
      return getTaskById(ids[0]);
    });
}
