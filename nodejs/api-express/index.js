const express = require("express");

const server = express();

server.use(express.json());

let reqCounter = 0;
const projects = [];

// Middlewares
function checkProjectExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find(item => item.id === id);

  if (!project) {
    return res.status(400).json({ error: "Project (id) is required" });
  }

  return next();
}

server.use((req, res, next) => {
  reqCounter++;

  next();

  console.log(`(${reqCounter} request were made!)`);
});

// Controllers
server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.put("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);

  project.title = title;

  return res.json(project);
});

server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id === id);

  projects.splice(projectIndex, 1);

  return res.send();
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = { id, title, tasks: [] };

  projects.push(project);

  return res.json(project);
});

server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);

  project.tasks.push(title);

  return res.json(project);
});

server.listen(3333);
