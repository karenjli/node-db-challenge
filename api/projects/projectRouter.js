const express = require("express");

const project = require("./projectDb.js");

const router = express.Router();

router.get("/", (req, res) => {
  project
    .getProjects()
    .then(project => {
      project.forEach(pro => {
        if (pro.completed === 0) {
          pro.completed = false;
        } else {
          pro.completed = true;
        }
      });
      res.status(200).json(project);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "Error retreiving projects from server" });
    });
});

// router.get("/:id/tasks", (req, res) => {
//   const proId = req.params.id;
//   project
//     .getTaskById(proId)
//     .then(task => {
//       task.forEach(pro => {
//         if (pro.completed === 0) {
//           pro.completed = false;
//         } else {
//           pro.completed = true;
//         }
//       });
//       res.status(200).json(task);
//     })
//     .catch(error => {
//       res
//         .status(500)
//         .json({ errorMessage: "Error retreiving task from one Id" });
//     });
// });

router.get("/resources", (req, res) => {
  project
    .getResources()
    .then(stuff => {
      res.status(200).json(stuff);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "Error retreiving resources from server" });
    });
});

router.get("/tasks", (req, res) => {
  project
    .getAllTasks()
    .then(work => {
      work.forEach(pro => {
        if (pro.completed === 0) {
          pro.completed = false;
        } else {
          pro.completed = true;
        }
      });
      res.status(200).json(work);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "Error retreiving tasks from server" });
    });
});

router.post("/", (req, res) => {
  const newPro = req.body;
  project
    .addProject(newPro)

    .then(id => {
      res.status(200).json(id);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "Error posting project to server" });
    });
});

router.post("/tasks", (req, res) => {
  const newTask = req.body;
  project
    .addTask(newTask)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "Error posting task to server" });
    });
});

router.post("/resources", (req, res) => {
  const newResource = req.body;
  project
    .addResources(newResource)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: "Error posting resource to server" });
    });
});
module.exports = router;
